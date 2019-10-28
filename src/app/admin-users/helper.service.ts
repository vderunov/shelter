import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './admin-users.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  apiUsers = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/users/';
  constructor(private httpClient: HttpClient) { }
  public getAllUsers(url?: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUsers}`);
  }
  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<User>(`${this.apiUsers}${id}`);
  }
  public updateUser(user: User, id: string) {
    return this.httpClient.put(`${this.apiUsers}${id}`, user);
  }
  public deleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUsers}${id}`);
  }
  public getUserInfo() {
    return this.httpClient.get<User[]>(`${this.apiUsers}?page=1`);
  }

}
