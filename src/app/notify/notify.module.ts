import { NgModule } from '@angular/core';
import { NotifyComponent } from './notify.component';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    MatSnackBarModule,
  ],
  exports: [NotifyComponent]
})
export class NotifyModule { }
