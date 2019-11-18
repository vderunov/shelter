import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Manager } from '../models/manager.model';
import { EditUserModel } from '../models/edit-user.model';

@Injectable({ providedIn: 'root' })

export class AdminUserService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getAllHelpers(paramObj: object = {}): Observable<Helper[]> {
    return this.getAllUsersByRole<Helper>(paramObj, 'helpersApi');
  }

  public getAllManagers(paramObj: object = {}): Observable<Manager[]> {
    return this.getAllUsersByRole<Manager>(paramObj, 'managersApi');
  }

  private getAllUsersByRole<T>(paramObj: object = {}, apiName: string): Observable<T[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<T[]>(config[apiName], { params })
      ),
    );
  }

  public getHelperById(id: string): Observable<Helper> {
    return this.getUserById<Helper>(id, 'helpersApi');
  }

  public getManagerById(id: string): Observable<Manager> {
    return this.getUserById<Manager>(id, 'managersApi');
  }

  private getUserById<T>(id: string, apiName: string): Observable<T> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<T>(`${config[apiName]}/${id}`)
      )
    );
  }

  public updateHelperById(helperData: Helper) {
    return this.updateUserById<Helper>(helperData, { id: helperData.id, api: 'helpersApi', apiForImage: 'helpersImageApi' });
  }

  public updateManagerById(helperData: Manager) {
    return this.updateUserById<Manager>(helperData, { id: helperData.id, api: 'managersApi', apiForImage: 'managersImageApi' });
  }

  private updateUserById<T>(data: T, argObj: EditUserModel) {
    this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<T>(`${config[argObj.api]}/${argObj.id}`, data, this.httpOptions);
      })
    );
    return this.putImage<T>(data, argObj);
  }

  private putImage<T>(data: T, argObj: EditUserModel): Observable<T> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<T>(`${config[argObj.apiForImage]}/${argObj.id}`, this.createFormData<T>(data));
      })
    );
  }

  public deleteHelperById(id: string) {
    return this.deleteUserById(id, 'helpersApi');
  }

  public deleteManagerById(id: string) {
    return this.deleteUserById(id, 'managersApi');
  }

  private deleteUserById(id: string, apiName: string) {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete(`${config[apiName]}/${id}`)
      )
    );
  }

  private createFormData<T>(info: T): FormData {
    const formData = new FormData();
    Object.entries(info).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ?
        formData.append(key, value, value.name) :
        formData.append(key, value));
    return formData;
  }
}
