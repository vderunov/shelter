import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Need } from '../models/need.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { Config } from 'src/app/shared/services/config/config.interface';
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getNeeds(paramObj: object = {}): Observable<Need[]> {
    const key: string = Object.keys(paramObj)[0];
    const value: string = paramObj[key];

    return this.configService.configLoaded.pipe(
      concatMap((config: Config) => this.http.get<Need[]>(config.needsApi)),
      map((arr: Need[]): Need[] => {
        if(Object.values(paramObj).length > 0){
          return arr.filter((el: Need): boolean => el[key].toLowerCase().indexOf(value.toLocaleLowerCase()) > -1)
        } 
        return arr;
      })
    );
  }
}
