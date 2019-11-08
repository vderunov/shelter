import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [NotifierComponent],
  imports: [
    MatSnackBarModule,
  ],
  exports: [NotifierComponent]
})
export class NotifierModule { }
