import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  onNoticeChanged$: BehaviorSubject<any>;

  constructor() {
    this.onNoticeChanged$ = new BehaviorSubject(null);
  }

  public setNotice(message: string, type: string) {
    const notice = {
      message: message,
      type: type
    };

    this.onNoticeChanged$.next(notice);
  }
}
