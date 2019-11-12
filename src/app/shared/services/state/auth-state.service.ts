import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateModel } from './auth-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private AuthStateName = 'AuthStateObject';

  private token$ = new BehaviorSubject<AuthStateModel>(null);

  constructor(private cookieService: CookieService) { }

  public isLogged(): boolean {
    if (this.getStateValue()) {
      return true;
    }
    return false;
  }

  public getTokenProperty(str: string): string | string[] {
    if (this.isLogged()) {
      return this.getStateValue()[str];
    }
  }

  public getState(): BehaviorSubject<AuthStateModel> {
    if (!this.token$.getValue() && this.cookieService.get(this.AuthStateName)) {
      this.token$.next(JSON.parse(this.cookieService.get(this.AuthStateName)));
    }
    return this.token$;
  }

  public getStateValue(): object {
    return this.getState().getValue();
  }

  public setToken(tokenObj: AuthStateModel): void {
    this.token$.next(tokenObj);
    if (tokenObj) {
      this.cookieService.set(this.AuthStateName, JSON.stringify(tokenObj), Date.now() + 7);
    } else {
      this.cookieService.delete(this.AuthStateName);
    }
  }

  public cleanAuthenticatedState(): void {
    this.setToken(null);
  }

}
