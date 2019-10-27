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
  public firstPage: string;
  public prevPage: string;
  public nextPage: string;
  public lastPage: string;
api = 'https://familynetserver.azurewebsites.net/api/v1/users/'
apiUsers = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/users/';
apiMenager = 'https://cors-anywhere.herokuapp.com/https://familynetserver.azurewebsites.net/api/v1/representatives/';

  constructor(private httpClient: HttpClient) { }











  public getAllUsers(url?: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUsers}`);
  }

  public getManagers(url?: string) {
    return this.httpClient.get<Manager[]>(`${this.apiMenager}`);
  }


  public getUserById(id: string): Observable<any> {
    return this.httpClient.get<User>(`${this.apiUsers}${id}`);
  }

  // public createUser(user: User) {
  //   return this.httpClient.post(`${this.apiUsers}`, user);
  // }

  public updateUser(user: User, id: string) {
    return this.httpClient.put(`${this.api}${id}`, user);
  }

  public deleteUser(id: string) {
    return this.httpClient.delete(`${this.apiUsers}${id}`);
  }


  public getUserInfo(url?: string) {
    return this.httpClient.get<User[]>(`${this.apiUsers}?page=1`,
      { observe: 'response' }).pipe(tap(res => {
        this.pagination(res);
      }));
  }
  public getManagerInfo(url?: string) {
    return this.httpClient.get<Manager[]>(`${this.apiMenager}?page=1`,
      { observe: 'response' }).pipe(tap(res => {
        this.pagination(res);
      }));
  }
  public pagination(response) {

    // const linkHeader = this.headerLink(response.headers.get('Link'));
    // const linkHeader = this.headerLink(response.headers);
    // this.firstPage = linkHeader['first'];
    // this.lastPage = linkHeader['last'];
    // this.prevPage = linkHeader['prev'];
    // this.nextPage = linkHeader['next'];
  }

  headerLink(header) {
    console.log(header);

    }
  // headerLink(header) {
  //   if (header.length !==110) {
  //     return;
  //   }

    // const parts = header.split(',');
    // const links = {};
    // parts.forEach(p => {
    //   const section = p.split(';');
    //   const url = section[0].replace(/<(.*)>/, '$1').trim();
    //   const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    //   links[name] = url;

    // });
    // return links;
  // }

}
