import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Manager } from './manager.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
apiUsers = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/users/';
apiManager = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/representatives/';

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(url?: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUsers}`);
  }
  public getManagers(url?: string) {
    return this.httpClient.get<Manager[]>(`${this.apiManager}`);
  }

  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<User>(`${this.apiUsers}${id}`);
  }
  public getManagerById(id: string): Observable<any> {
    return this.httpClient.get<Manager>(`${this.apiManager}${id}`);
  }
  public updateUser(user: User, id: string) {
    return this.httpClient.put(`${this.apiUsers}${id}`, user);
  }
  public updateManager(manager: Manager, id: string) {
    return this.httpClient.put(`${this.apiManager}${id}`, manager);
  }
  public deleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUsers}${id}`);
  }
  public deleteManager(id: string) {
    return this.httpClient.delete(`${this.apiManager}${id}`);
  }
  public getUserInfo() {
    return this.httpClient.get<User[]>(`${this.apiUsers}?page=1`);
  }
  public getManagerInfo() {
    return this.httpClient.get<Manager[]>(`${this.apiManager}?page=1`);
  }


}
