import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from '../models/manager.model';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ManagersService {
    apiManager = 'https://familynetserver.azurewebsites.net/api/v1/representatives/';
    constructor(private httpClient: HttpClient) { }
    public getManagers(url?: string) {
        return this.httpClient.get<Manager[]>(`${this.apiManager}`);
    }
    public getManagerById(id: string): Observable<any> {
        return this.httpClient.get<Manager>(`${this.apiManager}${id}`);
    }
    public updateManager(manager: Manager, id: string) {
        return this.httpClient.put(`${this.apiManager}${id}`, manager);
    }
    public deleteManager(id: string) {
        return this.httpClient.delete(`${this.apiManager}${id}`);
    }
    public getManagerInfo() {
        return this.httpClient.get<Manager[]>(`${this.apiManager}?page=1`);
    }
}
