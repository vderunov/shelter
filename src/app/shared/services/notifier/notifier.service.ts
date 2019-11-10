import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(public snackBar: MatSnackBar) { }

  public showNotice(message: string, type: string): void {
    this.snackBar.open(message, null, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: [`notify-${type}`]
    });
  }
}
