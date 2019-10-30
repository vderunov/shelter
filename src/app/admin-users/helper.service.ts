import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Helper } from './helper.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  // apiUsers = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/representatives/';
  apiUsers = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/volunteers/';
  constructor(private httpClient: HttpClient) { }
  public getAllUsers(): Observable<Helper[]> {
    return this.httpClient.get<Helper[]>(`${this.apiUsers}`);
  }
  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<Helper>(`${this.apiUsers}${id}`);
  }
  public updateUser(user: Helper, id: string) {
    return this.httpClient.put(`${this.apiUsers}${id}`, user);
  }
  public deleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUsers}${id}`);
  }
  public getUserInfo() {
    return this.httpClient.get<Helper[]>(`${this.apiUsers}?page=1`);
  }

}
