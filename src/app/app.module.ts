import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheltersModule } from './shelters/shelters.module';
import { LoginModule } from './login/login.module';
import { RegistrationUserModule } from './registration-user/registration-user.module';
import { RegistrationShelterModule } from './registration-shelter/registration-shelter.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SheltersModule,
    RegistrationShelterModule,
    LoginModule,
    RegistrationUserModule,
    NavbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
