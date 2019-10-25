import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NeedsModule } from './needs/needs.module';
import { QuestsComponent } from './quests/quests.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NeedsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
