import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({ providedIn: 'root' })

export class HelpersService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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


  public updateHelperById(helperData: Helper) {
    this.putHelperImage(helperData);
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<Helper>(`${config.helpersApi}/${helperData.id}`, helperData, this.httpOptions);

      })
    );
  }
  public putHelperImage(helperData): Observable<Helper> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<Helper>(`${config.helpersImageApi}/${helperData.id}`, this.createFormData(helperData));

      })
    );
  }

  public deleteHelperById(id: string) {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete(`${config.helpersApi}/${id}`)
      )
    );
  }

  // private putHelperImage(api: string, info: Helper, helperId: number) {
  //   return this.http.put<Helper>(`${api}/${helperId}`, this.createFormData(info));
  // }

  private createFormData(info: Helper): FormData {
    const formData = new FormData();
    Object.entries(info).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ?
        formData.append(key, value, value.name) :
        formData.append(key, value));
    return formData;
  }
}
