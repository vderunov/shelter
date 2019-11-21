import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.interface';
import { concatMap } from 'rxjs/operators';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  public getQuests(paramObj: object = {}): Observable<Quest[]> {
    let params = new HttpParams();
    Object.keys(paramObj).forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.get<Quest[]>(config.questsApi, { params })),
    );
  }

  public getDetails(id: string): Observable<Quest> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Quest>(`${config.questsApi}/${id}`)
      )
    );
  }

  public putNewData(id: string | number, newData): Observable<Quest> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.put<Quest>(`${config.questsApi}/${id}`, newData, httpOptions)
      )
    );
  }

  public deleteQuest(id: string): any {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete<Quest>(`${config.questsApi}/${id}`)
      )
    );
  }
}
