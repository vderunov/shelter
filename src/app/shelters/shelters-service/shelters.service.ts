import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, zip } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map, take, catchError } from 'rxjs/operators';
import { AddressShelter } from '../models/address-shelter.interface';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Location } from '../models/location.interface';
import { Children } from 'src/app/shared/models/children.interface';
import { Representative } from 'src/app/shared/models/representative.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        zip(
          this.http.get<Shelter[]>(config.sheltersApi, { params }),
          this.http.get(config.childrenApi),
          this.http.get(config.representativesApi),
          this.http.get<AddressShelter[]>(config.addressApi),
          )
        ),
        map(([shelters, children, representatives, address]: [Shelter[], Children[], Representative[], AddressShelter[]]) => {
          const countChildren = children.reduce((acc, curr) => {
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

  public getDetails(id: number): Observable<Shelter> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.universalGet<Shelter>(config.sheltersApi, id).pipe(
          concatMap((shelter: Shelter): Observable<[Shelter, AddressShelter, Location]> =>
            zip(
              of(shelter),
              this.universalGet<AddressShelter>(config.addressApi, shelter.adressID),
              this.universalGet<Location>(config.locationApi, shelter.locationID)
            )
          ),
          map(([shelter, address, location]): Shelter => ({
            ...shelter,
            address,
            location,
          }))
        )
      )
    );
  }


  public putShelterDetails(changeData): Observable<[Shelter, AddressShelter]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        const location$ = changeData.shelter.locationID ?
          // will change value null to changeData.address to location when its work is stable
          this.universalPut<Location>(config.locationApi, null, changeData.shelter.locationID) :
          this.universalPost<Location>(config.locationApi, null);
        return location$.pipe(take(1),
          concatMap((location: Location ): Observable<[Shelter, AddressShelter]> => {
            if (location) {
              changeData.shelter.locationID = location.id;
            } else {
              changeData.shelter.locationID = null;
            }
            return zip(
              this.universalPut<Shelter>(config.sheltersApi, changeData.shelter, changeData.id),
              this.universalPut<AddressShelter>(config.addressApi, changeData.address, changeData.addressID)
            );
          })
        );
      })
    );
  }

  private universalGet<T>(api: string, id: number): Observable<T> {
    return id ? this.http.get<T>(`${api}/${id}`) : of(null);
  }

  private universalPut<T>(api: string, body: T, id: number): Observable<T> {
    return body ? this.http.put<T>(`${api}/${id}`, body) : of(null);
  }

  private universalPost<T>(api: string, body: T): Observable<T> {
    return body ? this.http.post<T>(api, body) : of(null);
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
        return this.universalPost<AddressShelter>(config.addressApi, addressDate).pipe(
          concatMap(address => {
            shelterDate.adressID = address.id;
            return this.universalPost<Shelter>(config.sheltersApi, shelterDate);
          })
        );
      })
    );
  }

}
