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

  public isLogged(): boolean {
    if (this.token$) {
      return true;
    }
    return false;
  }

  public getUserProperty(str: string): string | string[] {
    return this.userData[str];
  }

  public getState(): Observable<any> {
    return this.token$;
  }

  public getStateValue() {
    return this.token$.getValue();
  }

  public setToken(tokenObj: any) {
    this.token$.next(tokenObj.token);
    if (tokenObj) {
      console.log(tokenObj);
      this.cookieService.set('token', tokenObj, Date.now() + 7);
      this.userData.email = tokenObj.email;
      this.userData.personId = tokenObj.personId;
      this.userData.roles = tokenObj.roles;
      this.userData.id = tokenObj.id;
    } else {
      this.cookieService.delete('token');
    }
  }

  public cleanAuthenticatedState() {
    this.setToken(null);
  }

}
