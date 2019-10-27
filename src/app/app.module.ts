import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DonationModule } from './donation/donation.module';
import { SheltersModule } from './shelters/shelters.module';
import { LoginModule } from './login/login.module';
import { RegistrationUserModule } from './registration-user/registration-user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { RegistrationShelterModule } from './registration-shelter/registration-shelter.module';
import {AdminUsersModule} from './admin-users/admin-users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
=======

@NgModule({
  declarations: [AppComponent, NavbarComponent],
>>>>>>> 89f95b7c113748b82682598e3c3ec7a4b8d2412d
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SheltersModule,
    MatButtonModule,
    LoginModule,
    RegistrationUserModule,
<<<<<<< HEAD
    AdminUsersModule
=======
    DonationModule
>>>>>>> 89f95b7c113748b82682598e3c3ec7a4b8d2412d
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
