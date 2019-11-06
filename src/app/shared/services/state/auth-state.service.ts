import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  constructor(private cookieService: CookieService) { }

  private token$ = new BehaviorSubject<string>(this.cookieService.get('token') || null);

  public getState(): Observable<any> {
    return this.token$;
  }

  public getStateValue() {
    return this.token$.getValue();
  }

  public setToken(tokenObj: any) {
    this.token$.next(tokenObj);

  }

  public cleanAuthenticatedState() {
    this.setToken(null);
  }

  // private getUserInfo(): object {
  //   return this.getState().pipe(
  //     take(1),
  //     map(tok => {
  //       return this.base64decode(this.getPayload(tok));
  //     })
  //   ).subscribe();
  // }

  public base64decode(str: string): string {
    return atob(str);
  }

  public getPayload(str: string): string {
    return str.match(/.*?\.(.*?)\..*/)[1];
  }
}
