import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NotifyComponent } from './notify.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [NotifyComponent]
})
export class NotifyModule { }
