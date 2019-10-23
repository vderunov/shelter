import { async, TestBed } from '@angular/core/testing';

import { RegistrationShelterComponent } from './registration-shelter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

describe('RegistrationShelterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationShelterComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule
      ]
    }).compileComponents();
  }));
});
