import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheltersModule } from './shelters/shelters.module';
import { LoginModule } from './login/login.module';
import { RegistrationUserModule } from './registration-user/registration-user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SheltersModule,
    MatButtonModule
    MatButtonModule,
    LoginModule,
    RegistrationUserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
