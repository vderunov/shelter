import { TestBed } from '@angular/core/testing';
import { AuthStateService } from './auth-state.service';
import { AuthStateModel } from './auth-state.model';
import { CookieService } from 'ngx-cookie-service';


describe('AuthStateService', () => {
  let mockStateObj: AuthStateModel;
  let service: AuthStateService;
  let cookieService: jasmine.SpyObj<CookieService>;
  // let cookieServiceSpy;

  TestBed.configureTestingModule({
    providers:    [ {provide: CookieService, useValue: cookieService } ]
  });

  beforeEach(() => {
    mockStateObj = {
      // tslint:disable-next-line:max-line-length
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImE2ZjA2ZjRiLTA2ZjUtNGYxZi05NjE0LTkyYTlkYWNiMjJhZiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTU3NDIxMDQ1OSwiZXhwIjoxNTc0ODE1MjU5LCJpYXQiOjE1NzQyMTA0NTl9.wcfrVar8ULarK8iYpGlZqD3_SBolWEDd5AhYVXLDIYE',
      // @ts-ignore
      roles: ['Admin'],
      email: 'itacdp1661@gmail.com',
      personId: '18',
      id: 'a6f06f4b-06f5-4f1f-9614-92a9dacb22af'
    };

    cookieService = TestBed.get(CookieService);
    service = new AuthStateService(cookieService);
  });

  // it('service should be created', () => {
  //   const service: AuthStateService = TestBed.get(AuthStateService);
  //   expect(service).toBeTruthy();
  // });

  it('should return the property of StateObj', () => {
    expect(service.getStateProperty('token')).toEqual(mockStateObj.token);
  });

});
