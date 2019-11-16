import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable } from 'rxjs';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ManagersService {

    constructor(
        private http: HttpClient,
        private configService: ConfigService) { }

    public httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

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

    public updateManagerById(managerData: Manager): Observable<Manager> {
        return this.configService.getConfig().pipe(
            concatMap((config: Config) => {
                return this.http.put<Manager[]>(`${config.managersApi}/${managerData.id}`, managerData, this.httpOptions),
                    this.putManagerImage(config.managersImageApi, managerData, managerData.id);
            })
        );
    }

    public deleteManagerById(id: string) {
        return this.configService.getConfig().pipe(
            concatMap((config: Config) =>
                this.http.delete(`${config.managersApi}/${id}`)
            )
        );
    }

    private putManagerImage(api: string, info: Manager, managerId: number): Observable<Manager> {
        return this.http.put<Manager>(`${api}/${managerId}`, this.createFormData(info));
    }

    private createFormData(info: Manager): FormData {
        const formData = new FormData();
        Object.entries(info).forEach(([key, value]: [string, Blob]) =>
            value instanceof File ?
                formData.append(key, value, value.name) :
                formData.append(key, value));
        return formData;
    }
}
