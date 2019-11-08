import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { NotifierService } from './notifier.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-notifier',
  template: '',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit, OnDestroy {
  private config = new MatSnackBarConfig();
  private destroy$: Subject<void> = new Subject();

  constructor(
    private snackBar: MatSnackBar,
    public notifier: NotifierService
  ) { }

  public ngOnInit(): void {
    this.setConfig();

    this.notifier.onNoticeChanged$
      .pipe(takeUntil(this.destroy$))
      .subscribe(notice => {
        if (notice) {
          if (notice.type === 'success') {
            this.showSuccess(notice.message);
          } else if (notice.type === 'error') {
            this.showError(notice.message);
          }
        }
      });
  }

  private setConfig(): void {
    this.config.duration = 3000;
    this.config.horizontalPosition = 'right';
    this.config.verticalPosition = 'bottom';
  }

  private showError(message: string): void {
    this.config.panelClass = ['notify-error'];
    this.snackBar.open(message, null, this.config);
  }

  private showSuccess(message: string): void {
    this.config.panelClass = ['notify-success'];
    this.snackBar.open(message, null, this.config);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
