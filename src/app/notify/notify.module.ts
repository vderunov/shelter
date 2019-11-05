import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';

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
export class NotifyModule {
}
