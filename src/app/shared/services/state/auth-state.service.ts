import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private token$ = new BehaviorSubject<object>(null);

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
  //       const userInfo = tok.match(/.*?\.(.*?)\..*/)[1];
  //
  //
  //     })
  //   )
  //
  // }

  private base64decode(str: string): string {
    return atob(str);
  }

  private getPayload(str: string): string {
    return str.match(/.*?\.(.*?)\..*/)[1];
  }
}
