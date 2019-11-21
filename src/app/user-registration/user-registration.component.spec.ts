import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { UserRegistrationService } from './services/user-registration.service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { of } from 'rxjs';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let userRegistrationServiceSpy: { addUser: jasmine.Spy };
  let authStateServiceSpy: { getStateValue: jasmine.Spy };

  beforeEach(() => {
    userRegistrationServiceSpy = jasmine.createSpyObj('userRegistrationService', ['addUser']);
    authStateServiceSpy = jasmine.createSpyObj('authStateService', ['getStateValue']);

    TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        CookieService,
        {provide: UserRegistrationService, useValue: userRegistrationServiceSpy},
        {provide: AuthStateService, useValue: authStateServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method onSubmit', () => {
    let formData;
    beforeEach(() => {
      userRegistrationServiceSpy.addUser.and.returnValue(of(null));
      component.userRegForm.patchValue({
        phone: '(050) 123-4567',
        email: 'moreCofee@gmail.com',
        password: '678imLosingWeight',
        confirmPassword: '678imLosingWeight'
      });
      formData = component.userRegForm.value;
      component.role = 'Volunteer';
    });

    it('should send data from registration form to method addUser of service userRegistrationService', () => {
      component.onSubmit();
      expect((component as any).userRegistrationService.addUser).toHaveBeenCalledWith(formData, 'Volunteer');
    });
  });

  describe('Method isAdmin', () => {
    it('should return true if current user is admin', () => {
      authStateServiceSpy.getStateValue.and.returnValue({roles: ['Admin']});
      expect((component as any).isAdmin()).toBeTruthy();
    });
  });
});
