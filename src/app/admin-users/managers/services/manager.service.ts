import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable, of, zip } from 'rxjs';
import { Config } from 'src/app/shared/services/config/config.interface';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { concatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ManagersService {

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




    // public updateManagerImageById(changeData): Observable<Manager> {
    //     return this.configService.getConfig().pipe(
    //         concatMap((config: Config) => {
    //             this.http.put<Manager>(`${config.managersImageApi}/${changeData.id}`,
    //                 this.createFormData(changeData.manager))
    //         })
    //     );
    // }


    public updateManagerImageById(changeData): Observable<Manager[]> {
        console.log(changeData, changeData.id);
        return this.configService.getConfig().pipe(
            concatMap((config: Config) => {
                return zip(
                    this.putShelter(config.managersImageApi, changeData, changeData.id)
                );
                // this.putShelter(config.sheltersApi, changeData.shelter, changeData.id)
            })
        );
    }

    private putShelter(api, shelter, shelterId): Observable<Manager> {
        return shelter ? this.http.put<Manager>(`${api}/${shelterId}`, this.createFormData(shelter)) : of(null);
    }

    private createFormData(params): FormData {
        const formData = new FormData();
        Object.entries(params).forEach(([key, value]: [string, Blob]) =>
            value instanceof File ? formData.append(key, value, value.name) :
                formData.append(key, value));
        return formData;
    }


    // public updateManagerImageById( id, avatar): Observable<Manager> {
    //     console.log(avatar, avatar.name);
    //     const fd = new FormData();
    //     fd.append('image', avatar, avatar.name);
    //     return this.configService.getConfig().pipe(
    //         concatMap((config: Config) =>
    //             this.http.put<Manager>(`${config.managersImageApi}/${id}`, fd)
    //         )
    //     );
    // }
    // public updateManagerById(formValue: object, id: string): Observable<Manager> {
    //     return this.configService.getConfig().pipe(
    //         concatMap((config: Config) =>
    //             this.http.put<Manager>(`${config.managersApi}/${id}`, formValue)
    //         )
    //     );
    // }

    public deleteManagerById(id: string) {
        return this.configService.getConfig().pipe(
            concatMap((config: Config) =>
                this.http.delete(`${config.managersApi}/${id}`)
            )
        );
    }

}
