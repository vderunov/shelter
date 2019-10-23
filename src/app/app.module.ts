import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationShelterModule } from './registration-shelter/registration-shelter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RegistrationShelterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
