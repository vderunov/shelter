import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shelter } from '../models/shelter.interface';
import { Observable, of, forkJoin } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  private config: Config;

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getShelters(params: string = ''): Observable<Shelter[]> {
    return this.configService.configLoaded
      .pipe(
        concatMap(config => this.http.get<Shelter[]>(config.sheltersApi + params))
      );
  }

  public getShelter(id): Observable<Shelter> {
    return this.configService.configLoaded
      .pipe(
        concatMap(config => {
          this.config = config;
          return this.http.get<Shelter>(`${this.config.sheltersApi}/${id}`)
        })
      )
  }

  getDetails(id: string = ''): Observable<Shelter> {
    return this.getShelter(id)
      .pipe(
        concatMap(
          (shelter: Shelter): Observable<any[]> => forkJoin(
            of(shelter),
            shelter.adressID && this.getData(this.config.addressApi, shelter.adressID) || of(null),
            shelter.locationID && this.getData(this.config.locationApi, shelter.locationID) || of(null)
          )
        ),
        map((arr: any[]): Shelter => arr.reduce((acc, curr) => ({ ...curr, ...acc }))
        )
      );
  }

  getData(api, params) {
    return this.http.get(`${api}/${params}`)
  }
}
