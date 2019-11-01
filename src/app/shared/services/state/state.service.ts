import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private token$ = new BehaviorSubject<any>('');

  getState(): Observable<any> {
    return this.token$;
  }

  setToken(tokenObj: any) {
    this.token$.next(tokenObj);
  }
}
