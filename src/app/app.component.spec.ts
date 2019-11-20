import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SheltersModule } from './shelters/shelters.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        NoopAnimationsModule,
        SheltersModule,
        AgmCoreModule,
        MatButtonModule
      ],
      declarations: [AppComponent, NavbarComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
