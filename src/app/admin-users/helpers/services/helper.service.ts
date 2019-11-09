import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';

@Injectable({ providedIn: 'root' })

export class HelpersService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getAllHelpers(paramObj: object = {}): Observable<Helper[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Helper[]>(config.helpersApi, { params })
      )
    );
  }

  public getHelperById(id: string): Observable<Helper> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Helper>(`${config.helpersApi}/${id}`)
      )
    );
  }


  public updateHelperById(formValue: object, id: string): Observable<Helper> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.put<Helper>(`${config.helpersApi}/${id}`, [formValue])
      )
    );
  }

  public deleteHelperById(id: string) {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete(`${config.helpersApi}/${id}`)
      )
    );
  }

}
