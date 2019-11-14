import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manager } from '../managers/models/manager.model';
import { Helper } from '../helpers/models/helper.model';
import { Observable } from 'rxjs';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getAllManagers(paramObj: object = {}): Observable<Manager[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Manager[]>(config.managersApi, { params })
      )
    );
  }

  public getManagerById(id: string): Observable<Manager> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Manager>(`${config.managersApi}/${id}`)
      )
    );
  }

  public updateManagerById(formValue: object, id: string): Observable<Manager> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.put<Manager>(`${config.managersApi}/${id}`, formValue)
      )
    );
  }

  public deleteManagerById(id: string) {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete(`${config.managersApi}/${id}`)
      )
    );
  }

}
