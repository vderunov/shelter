import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SheltersModule } from './shelters/shelters.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationShelterModule } from './registration-shelter/registration-shelter.module';
import { MatButtonModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { DonationModule } from './donation/donation.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        NoopAnimationsModule,
        SheltersModule,
        MatButtonModule,
        RegistrationShelterModule,
        DonationModule
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
