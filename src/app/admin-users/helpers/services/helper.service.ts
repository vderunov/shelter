import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public helper: Helper;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getAllHelpers(): Observable<Helper[]> {
    return this.configService.configLoaded.pipe(
      concatMap((config: Config) =>
        this.http.get<Helper[]>(config.helpersApi)
      )
    );
  }

  public getHelperById(id: string): Observable<Helper> {
    return this.configService.configLoaded.pipe(
      concatMap((config: Config) => this.getHelper(config.helpersApi, id)
      )
    );
  }

  public getHelper(api, id: string): Observable<Helper> {
    return this.http.get<Helper>(`${api}/${id}`);
  }

  public updateUser(api, id: string) {
    return this.http.put(`${api}/${id}`, this.helper);
  }

  public deleteUser(api, id: string) {
    return this.http.delete(`${api}/${id}`);
  }

}
