import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable, of, zip } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({ providedIn: 'root' })

export class HelpersService {

  // public getAllHelpers(paramObj: object = {}): Observable<Helper[]> {
  //   let params = new HttpParams();
  //   Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
  //   return this.configService.getConfig().pipe(
  //     concatMap((config: Config) =>
  //       this.http.get<Helper[]>(config.helpersApi, { params })
  //     )
  //   );
  // }

  // public getHelperById(id: string): Observable<Helper> {
  //   return this.configService.getConfig().pipe(
  //     concatMap((config: Config) =>
  //       this.http.get<Helper>(`${config.helpersApi}/${id}`)
  //     )
  //   );
  // }

  // public updateHelperById(formValue, id: string): Observable<Helper> {
  //   console.log(formValue);
  //   return this.configService.getConfig().pipe(
  //     concatMap((config: Config) =>

  //   // this.http.put<Helper>(`${config.helpersApi}/${id}`,  JSON.stringify(formValue))
  //   this.http.put<Helper>(`${config.helpersApi}/${id}`, formValue)
  //     )
  //   );
  // }

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  public getAllHelpers(paramObj: object = {}): Observable<Helper[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Helper[]>(config.helpersApi, { params })
      ),
    );
  }

  public getHelperById(id: string): Observable<Helper> {
      return this.configService.getConfig().pipe(
        concatMap((config: Config) =>
          this.http.get<Helper>(`${config.helpersApi}/${id}`)
        )
      );
    }

  public updateHelperById(changeData): Observable<Helper> {
    return this.configService.getConfig().pipe(
          concatMap((config: Config) =>
          this.putHelper(config.helpersApi, changeData, changeData.id)
    ));
  }

  private putHelper(api, helper, helperId): Observable<Helper> {
    console.log(helper);
    return helper ? this.http.put<Helper>(`${api}/${helperId}`, this.createFormData(helper)) : of(null);
  }

  public deleteHelperById(id: string) {
      return this.configService.getConfig().pipe(
        concatMap((config: Config) =>
          this.http.delete(`${config.helpersApi}/${id}`)
        )
      );
    }

  private createFormData(params): FormData {
    const formData = new FormData();
    Object.entries(params).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ? formData.append(key, value, value.name) : formData.append(key, value));
    return formData;
  }


}
