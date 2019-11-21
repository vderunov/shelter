import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Need } from '../models/need.interface';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NeedService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getNeeds(paramObj: object = {}): Observable<Need[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.get<Need[]>(config.needsApi, { params }))
    );
  }

  public getDetails(id: string): Observable<Need> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Need>(`${config.needsApi}/${id}`)
      )
    );
  }

  public putNeedData(id: number | string, newData): Observable<Need> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.put<Need>(`${config.donationItemsApi}/${id}`, newData, this.httpOptions)
      )
    );
  }

  public putStatus(id: number | string, newData): Observable<Need> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.put<Need>(`${config.needsApi}/${id}`, newData, this.httpOptions)
      )
    );
  }

  public deleteNeed(id: string): any {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete<Need>(`${config.needsApi}/${id}`)
      )
    );
  }
}
