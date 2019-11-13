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
    if (!this.state$) {
      return this.cookieService.check(this.authStateName);
    }
    return Boolean(this.getStateValue());
  }

  public getStateProperty(str: string): string | string[] {
    if (this.isLogged()) {
      return this.getStateValue()[str];
    }
  }

  public getState(): Observable<AuthStateModel> {
    return this.getStateSubject().asObservable();
  }

  public getStateValue(): AuthStateModel {
    return this.getStateSubject().getValue();
  }

  public setState(stateObj: AuthStateModel): void {
    this.getStateSubject().next(stateObj);
    if (stateObj) {
      this.cookieService.set(this.authStateName, JSON.stringify(stateObj), 7);
    } else {
      this.cookieService.delete(this.authStateName);
    }
  }

  public cleanAuthenticatedState(): void {
    this.setState(null);
  }

  private getStateSubject(): BehaviorSubject<AuthStateModel> {
    if (!this.state$) {
      this.state$ = new BehaviorSubject<AuthStateModel>(this.getStateFromCookie());
    }
    return this.state$;
  }

  private getStateFromCookie(): AuthStateModel {
    if (this.cookieService.check(this.authStateName)) {
      return JSON.parse(this.cookieService.get(this.authStateName));
    }
  }

}
