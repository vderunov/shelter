import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable } from 'rxjs';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class ManagersService {
   public manager: Manager;

    constructor(private http: HttpClient, private configService: ConfigService) { }

    public getAllManagers(): Observable<Manager[]> {
        return this.configService.getConfig().pipe(
            concatMap((config: Config) =>
                this.http.get<Manager[]>(config.managersApi)
            )
        );
    }

    public getManagerById(id: string = ''): Observable<Manager> {
        return this.configService.getConfig().pipe(
            concatMap((config: Config) => this.getManager(config.managersApi, id)
            )
        );
    }

    public getManager(api, id): Observable<Manager> {
        return this.http.get<Manager>(`${api}/${id}`);
    }

    public updateManager(api, id: string) {
        return this.http.put(`${api}${id}`, this.manager);
    }

    public deleteManager(api, id: string) {
        return this.http.delete(`${api}${id}`);
    }

}
