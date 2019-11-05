import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {
  private config = new MatSnackBarConfig();

  constructor(private snackBar: MatSnackBar) {
    this.showMessage();
    // this.showError('Some Success - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ');
    this.showSuccess('Some Success - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ');
  }

  showMessage() {
    this.config.duration = 5000;
    this.config.horizontalPosition = 'left';
    this.config.verticalPosition = 'top';
  }

  showError(message: string) {
    this.config.panelClass = ['notify-error'];
    this.snackBar.open(message, null, this.config);
  }

  showSuccess(message: string) {
    this.config.panelClass = ['notify-success'];
    this.snackBar.open(message, null, this.config);
  }
}
