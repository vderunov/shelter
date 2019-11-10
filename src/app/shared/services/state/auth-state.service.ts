import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateModel } from './auth-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private AuthStateName = 'AuthStateObject';

  private cookieToken = this.getPreviousToken();

  private token$ = new BehaviorSubject<AuthStateModel>(this.cookieToken);

  constructor(private cookieService: CookieService) { }

  private getPreviousToken() {
    if (this.cookieService.get(this.AuthStateName)) {
      return JSON.parse(this.cookieService.get(this.AuthStateName));
    }
    return null;
  }

  public isLogged(): boolean {
    if (this.getStateValue()) {
      return true;
    }
    return false;
  }

  public getTokenProperty(str: string): string | string[] {
    return this.token$.getValue()[str];
  }

  public getState(): Observable<any> {
    return this.token$;
  }

  public getStateValue() {
    return this.token$.getValue();
  }

  public setToken(tokenObj: AuthStateModel) {
    this.token$.next(tokenObj);
    if (tokenObj) {
      this.cookieService.set(this.AuthStateName, JSON.stringify(tokenObj), Date.now() + 7);
    } else {
      this.cookieService.delete(this.AuthStateName);
    }
  }

  public cleanAuthenticatedState() {
    this.setToken(null);
  }

}
