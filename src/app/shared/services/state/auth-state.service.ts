import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private token$ = new BehaviorSubject<object>(null);

  getState(): Observable<any> {
    return this.token$;
  }

  setToken(tokenObj: any) {
    this.token$.next(tokenObj);
  }

  cleanAuthenticatedState() {
    this.setToken(null);
  }
}
