import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, forkJoin } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { AddressShelter } from '../models/address-shelter.interface';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => {params = params.set(key, paramObj[key]);});

    return this.configService
      .getConfig()
      .pipe(concatMap((config: Config) => this.http.get<Shelter[]>(config.sheltersApi, { params })));
  }

  public getDetails(id: string = ''): Observable<Shelter> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.getShelter(config.sheltersApi, id).pipe(
          concatMap(
            (shelter: Shelter): Observable<Shelter[]> =>
              forkJoin(
                of(shelter),
                this.getAddress(config.addressApi, shelter.adressID),
                this.getLocation(config.locationApi, shelter.locationID)
              )
          ),
          map((arr: Shelter[]): Shelter => arr.reduce((acc, curr) => ({ ...curr, ...acc })))
        )
      )
    );
  }

  public getShelter(api, id): Observable<Shelter> {
    return this.http.get<Shelter>(`${api}/${id}`);
  }

  private getAddress(api, params): Observable<Shelter> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  private getLocation(api, params): Observable<Shelter> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  registerShelter(form): Observable<Shelter> {
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
