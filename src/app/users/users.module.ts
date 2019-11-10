import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { PhoneMaskDirective } from 'src/app/shared/directives/phone-mask.directive';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [UserRegistrationComponent, PhoneMaskDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [UserRegistrationComponent]
})
export class UsersModule { }
