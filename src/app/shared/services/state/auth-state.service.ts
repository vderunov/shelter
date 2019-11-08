import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from './user-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(
    private cookieService: CookieService,
    private userData: UserData,
    ) { }

  private token$ = new BehaviorSubject<string>(this.cookieService.get('token') || null);

  public getState(): Observable<any> {
    return this.token$;
  }

  public getStateValue() {
    return this.token$.getValue();
  }

  public setToken(tokenObj: any) {
    this.token$.next(tokenObj);
    if (tokenObj) {
      this.cookieService.set('token', tokenObj, Date.now() + 7);
      const tokenPayload = JSON.parse(this.base64decode(this.getPayload(tokenObj)));
      console.log(JSON.parse(this.base64decode(this.getPayload(tokenObj))));
      this.userData.email = tokenPayload.email;
      this.userData.personId = tokenPayload.personId;
      this.userData.roles = tokenPayload.roles;
      this.userData.id = tokenPayload.id;
      console.log(this.userData);
    } else {
      this.cookieService.delete('token');
    }
  }

  public cleanAuthenticatedState() {
    this.setToken(null);
  }

  public base64decode(str: string): string {
    return atob(str);
  }

  public getPayload(str: string): string {
    return str.match(/.*?\.(.*?)\..*/)[1];
  }
}
