import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable, of, zip, concat } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({ providedIn: 'root' })

export class HelpersService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  };







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
  public updateHelperImage(photo): Observable<any> {
    return this.configService.getConfig().pipe(
        concatMap((config: Config) => {
          const fd = new FormData();
          fd.append('avatar', photo, photo.name);
          return this.http.put<Helper>(config.helpersImageApi, fd);
        })


    );





    // console.log();
    // const fd = new FormData();
    // fd.append('avatar', photo, photo.name);
    // return this.configService.getConfig().pipe(
    //   concatMap((config: Config) =>
    //     this.http.put<Helper>(config.helpersImageApi, fd)
    //   ));
  }

  private putHelper(api, helper, helperId): Observable<Helper> {
    return helper ? this.http.put<Helper>(`${api}/${helperId}`, helper, this.httpOptions) : of(null);
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
