import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationShelterComponent } from './registration-shelter.component';
import { ShelterService } from '../shared/services/shelter.service';

describe('RegistrationShelterComponent', () => {
  let component: RegistrationShelterComponent;
  let fixture: ComponentFixture<RegistrationShelterComponent>;
  let shelterService: ShelterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationShelterComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      providers: [ShelterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    shelterService = new ShelterService(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 5 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('phone')).toBeTruthy();
    expect(component.form.contains('address')).toBeTruthy();
    expect(component.form.contains('kids')).toBeTruthy();
    expect(component.form.contains('info')).toBeTruthy();
  });

  it('should mark name as invalid if empty value', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should mark phone as invalid if empty value', () => {
    const control = component.form.get('phone');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should mark address as invalid if empty value', () => {
    const control = component.form.get('address');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should mark kids as invalid if empty value', () => {
    const control = component.form.get('kids');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
