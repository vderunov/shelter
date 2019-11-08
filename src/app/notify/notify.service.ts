import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  onNoticeChanged$ = new BehaviorSubject<any>(null);

  public showNotice(message: string, type: string): void {
    const notice = {
      message,
      type
    };

    this.onNoticeChanged$.next(notice);
  }
}
