import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, forkJoin, zip } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { AddressShelter } from '../models/address-shelter.interface';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    const params = new HttpParams();
    Object.entries(paramObj).forEach(([key, value]: string[]) => params.append(key, value));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Shelter[]>(config.sheltersApi, { params }),
          this.http.get(config.childrenApi),
          this.http.get(config.representativesApi),
          this.http.get(config.addressApi)
          )
        ),
        map(([shelters, children, representatives, address]: [Shelter[], any[], any[], any[]]) => {
          const countChildren = children.reduce((acc, curr): any => {
            acc[curr.childrenHouseID] = acc[curr.childrenHouseID] ? ++acc[curr.childrenHouseID] : 1;
            return acc;
          }, {});
          const representativesObj = representatives.reduce((acc, curr) => ({ [curr.childrenHouseID]: curr, ...acc }), {});
          const addressObj = address.reduce((acc, curr) => ({ [curr.id]: curr, ...acc }), {});
          return shelters.map((shelter: Shelter) => ({
            ...shelter,
            children: countChildren[shelter.id],
            representative: representativesObj[shelter.id],
            address: addressObj[shelter.adressID],
          }));
        })
      );
  }

  public getDetails(id: string = ''): Observable<Shelter> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.getShelter(config.sheltersApi, id).pipe(
          concatMap(
            (shelter: Shelter): Observable<any[]> =>
              zip(
                of(shelter),
                this.getAddress(config.addressApi, shelter.adressID),
                this.getLocation(config.locationApi, shelter.locationID)
              )
          ),
          map((arr: any[]): any => arr.reduce((acc, curr) => ({ ...curr, ...acc })))
        )
      )
    );
  }

  private getShelter(api, id): Observable<Shelter> {
    return this.http.get<Shelter>(`${api}/${id}`);
  }

  private getAddress(api, params): Observable<any> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  private getLocation(api, params): Observable<any> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  public putShelter(id, paramObj: object = {}): Observable<Shelter[]> {
    const params = new FormData();
    Object.entries(paramObj).forEach(([key, value]: string[]) => params.append(key, value));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.put<Shelter[]>(`${config.sheltersApi}/${id}`, params ))
    );
  }
  public registerShelter(form): Observable<Shelter> {
    const addressDate: AddressShelter = {
      country: form.country,
      region: form.region,
      city: form.city,
      street: form.street,
      house: form.house
    };

    const shelterDate: Shelter = {
      name: form.name,
      rating: form.rating,
      adressID: null,
      avatar: null,
      locationID: null
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.registerAddressShelter(config.addressApi, addressDate).pipe(
          concatMap(address => {
            shelterDate.adressID = address.id;
            return this.registrationShelter(config.sheltersApi, shelterDate);
          })
        );
      })
    );
  }

  private registerAddressShelter(api, addressDate): Observable<AddressShelter> {
    return this.http.post<AddressShelter>(api, addressDate);
  }

  private registrationShelter(api, shelterDate): Observable<Shelter> {
    return this.http.post<Shelter>(api, shelterDate);
  }
}
