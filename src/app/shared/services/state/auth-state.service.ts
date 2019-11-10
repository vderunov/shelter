import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Token } from './token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  constructor(private cookieService: CookieService) { }

  private token$ = new BehaviorSubject<Token>(this.getPreviousToken());

  private getPreviousToken() {
    if (this.cookieService.get('token')) {
      return JSON.parse(this.cookieService.get('token'));
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

  public setToken(tokenObj: Token) {
    this.token$.next(tokenObj);
    if (tokenObj) {
      this.cookieService.set('token', JSON.stringify(tokenObj), Date.now() + 7);
    } else {
      this.cookieService.delete('token');
    }
  }

  public cleanAuthenticatedState() {
    this.setToken(null);
  }

}
