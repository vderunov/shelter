import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnDestroy {
  private config = new MatSnackBarConfig();
  private subscription: Subscription;

  constructor(private snackBar: MatSnackBar, private notifyService: NotifyService) {
    this.setConfig();

    this.subscription = this.notifyService.onNoticeChanged$.subscribe(notice => {
      if (notice) {
        if (notice.type === 'success') {
          this.showSuccess(notice.message);
        } else if (notice.type === 'error') {
          this.showError(notice.message);
        }
      }
    });
  }

  private setConfig() {
    this.config.duration = 3000;
    this.config.horizontalPosition = 'right';
    this.config.verticalPosition = 'bottom';
  }

  private showError(message: string) {
    this.config.panelClass = ['notify-error'];
    this.snackBar.open(message, null, this.config);
  }

  private showSuccess(message: string) {
    this.config.panelClass = ['notify-success'];
    this.snackBar.open(message, null, this.config);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
