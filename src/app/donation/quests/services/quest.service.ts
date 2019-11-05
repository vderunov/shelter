import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from '../models/quest.interface';
import { concatMap, map } from 'rxjs/operators';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService) { }

  // TODO. Nikolaienko Mikhail responsible for realization of search logic.
  // Due to lack of search logic on backend, it is temporary realized on front-side.
  // Nikolaienko Mikhail takes responsibility to negotiate with backers on matter of realization
  // of search logic on beckend until next presentation.
  public getNeeds(paramObj: object = {}): Observable<Quest[]> {
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.get<Quest[]>(config.questsApi)),
      map((arr: Quest[]): Quest[] => {
        if (Object.values(paramObj).length > 0) {
          const key: string = Object.keys(paramObj)[0];
          const value: string = paramObj[key];
          return arr.filter((el: Quest): boolean => el[key].toLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
        }
        return arr;
      })
    );
  }
}
