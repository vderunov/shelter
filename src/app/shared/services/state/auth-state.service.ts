import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
}
