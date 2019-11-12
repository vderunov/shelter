import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateModel } from './auth-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private state$: BehaviorSubject<AuthStateModel>;

  private authStateName = 'AuthStateObject';

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

  public getState(): Observable<AuthStateModel> {
    return this.getStateSubject().asObservable();
  }

  private getStateSubject(): BehaviorSubject<AuthStateModel> {
    if (!this.state$) {
      this.state$ = new BehaviorSubject<AuthStateModel>(this.getStateFromCookie());
    }
    return this.state$;
  }

  private getStateFromCookie(): AuthStateModel {
    if (this.cookieService.get(this.authStateName)) {
      return JSON.parse(this.cookieService.get(this.authStateName));
    }
  }

  public getStateValue(): AuthStateModel {
    return this.getStateSubject().getValue();
  }

  public setToken(tokenObj: AuthStateModel): void {
    this.state$.next(tokenObj);
    if (tokenObj) {
      this.cookieService.set(this.authStateName, JSON.stringify(tokenObj), Date.now() + 7);
    } else {
      this.cookieService.delete(this.authStateName);
    }
  }

  public cleanAuthenticatedState(): void {
    this.setToken(null);
  }

}
