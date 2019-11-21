import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationServiceSpy: { login: jasmine.Spy };

  beforeEach(() => {
    authenticationServiceSpy = jasmine.createSpyObj('authenticationService', ['login']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [
        CookieService,
        {provide: AuthenticationService, useValue: authenticationServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component login', () => {
    expect(component).toBeTruthy();
  });

  describe('Method onSubmit', () => {

    it('should call method login of authenticationService with proper arguments', () => {
      authenticationServiceSpy.login.and.returnValue(of(null));
      component.loginForm.patchValue({
        email: 'someMail@gmail.com',
        password: 'California123',
      });
      const formData = component.loginForm.value;
      component.onSubmit();
      expect((component as any).authenticationService.login).toHaveBeenCalledWith(formData);
    });
  });
});
