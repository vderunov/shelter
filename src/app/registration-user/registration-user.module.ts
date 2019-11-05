import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationUserComponent } from './registration-user.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneMaskDirective } from '../shared/directives/phone-mask.directive';

@NgModule({
  declarations: [RegistrationUserComponent, PhoneMaskDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [RegistrationUserComponent]
})
export class RegistrationUserModule { }
