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
  constructor(private http: HttpClient, private configService: ConfigService) {}

  public getShelters(paramObj: object = {}): Observable<Shelter[]> {
    let params = new HttpParams();
    Object.entries(paramObj).forEach(
      ([key, value]: string[]) => (params = params.append(key, value))
    );
    return this.configService.configLoaded.pipe(
      concatMap((config: Config) =>
        this.http.get<Shelter[]>(config.sheltersApi, { params: params })
      )
    );
  }

  public getDetails(id: string = ''): Observable<Shelter> {
    return this.configService.configLoaded.pipe(
      concatMap((config: Config) =>
        this.getShelter(config.sheltersApi, id).pipe(
          concatMap(
            (shelter: Shelter): Observable<any[]> =>
              forkJoin(
                of(shelter),
                this.getAddress(config.addressApi, shelter.adressID),
                this.getLocation(config.locationApi, shelter.locationID)
              )
          ),
          map(
            (arr: any[]): Shelter =>
              arr.reduce((acc, curr) => ({ ...curr, ...acc }))
          )
        )
      )
    );
  }

  public getShelter(api, id): Observable<Shelter> {
    return this.http.get<Shelter>(`${api}/${id}`);
  }

  private getAddress(api, params): Observable<any> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  private getLocation(api, params): Observable<any> {
    return params ? this.http.get(`${api}/${params}`) : of(null);
  }

  registerAddressShelter(
    addressShelter: AddressShelter
  ): Observable<AddressShelter> {
    return this.configService.configLoaded.pipe(
      concatMap(config =>
        this.http.post<AddressShelter>(config.addressApi, addressShelter)
      )
    );
  }
}
