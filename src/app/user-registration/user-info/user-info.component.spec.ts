import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { UserRegistrationService } from '../services/user-registration.service';
import { of } from 'rxjs';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let authStateServiceSpy: { getStateProperty: jasmine.Spy };
  let userRegistrationServiceSpy: { addUserInfo: jasmine.Spy };

  beforeEach(() => {
    authStateServiceSpy = jasmine.createSpyObj('authStateService', ['getStateProperty']);
    authStateServiceSpy.getStateProperty.and.returnValue(['Admin']);
    userRegistrationServiceSpy = jasmine.createSpyObj('userRegistrationService', ['addUserInfo']);
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        CookieService,
        {provide: AuthStateService, useValue: authStateServiceSpy},
        {provide: UserRegistrationService, useValue: userRegistrationServiceSpy},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user-info component', () => {
    expect(component).toBeTruthy();
  });

  describe('Method onSubmit', () => {
    let formData;
    beforeEach(() => {
      userRegistrationServiceSpy.addUserInfo.and.returnValue(of(null));
      component.userInfoForm.patchValue({
        name: 'TheyKeepMe',
        patronymic: 'InBasementAndForce',
        surname: 'ToWriteThisTests',
        birthday: '0001-01-01T00:00:00'
      });
      formData = component.userInfoForm.value;
      component.role = 'Volunteer';
    });

    it('should send data from user-info form to method addUserInfo of service userRegistrationService', () => {
      component.onSubmit();
      expect((component as any).userRegistrationService.addUserInfo).toHaveBeenCalledWith(formData, 'Volunteer');
    });
  });
});
