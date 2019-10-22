import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationShelterComponent } from './registration-shelter.component';

describe('RegistrationShelterComponent', () => {
  let component: RegistrationShelterComponent;
  let fixture: ComponentFixture<RegistrationShelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationShelterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
