import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { LoginModel } from 'src/app/login/login.model';
import { of } from 'rxjs';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClientSpy: { post: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let authStateServiceSpy: { setState: jasmine.Spy, cleanAuthenticatedState: jasmine.Spy };
  let routerSpy: { navigate: jasmine.Spy };
  let configUrl: {
    loginApi: string;
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('http', ['post']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    authStateServiceSpy = jasmine.createSpyObj('authStateService', ['setState', 'cleanAuthenticatedState']);
    routerSpy = jasmine.createSpyObj('router', ['navigate']);
    configUrl = {
      loginApi: 'https://familynetserver.azurewebsites.net/api/v2/authentication'
    }
    service = new AuthenticationService(
      httpClientSpy as any, 
      configServiceSpy as any,
      authStateServiceSpy as any,
      routerSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method login', () => {
    let loginData: LoginModel;
    beforeEach(() => {
      loginData = {
        email: 'iWantToSleep@gmail.com',
        password: '123PleaseHelpMe'
      }
    httpClientSpy.post.and.returnValue(of({token: 'someData'}));
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
    });

    it('shold send data for login by post request', (done: DoneFn) => {
      service.login(loginData).subscribe(() => {
        expect(httpClientSpy.post).toHaveBeenCalledWith(configUrl.loginApi, loginData);
        done();
      })
    });
  });

  describe('Method logout', () => {
    it('should reset auth state', () => {
      service.logout();
      expect(authStateServiceSpy.cleanAuthenticatedState).toHaveBeenCalled();
    });
    
    it('should run router.navigate with proper argument', () => {
      service.logout();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
    });
  });

});
