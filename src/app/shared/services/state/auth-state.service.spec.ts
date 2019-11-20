import { TestBed } from '@angular/core/testing';
import { AuthStateService } from './auth-state.service';


describe('AuthStateService', () => {
  let mockState: AuthStateService;

  beforeEach(() => {
    mockState = {
      // @ts-ignore
      // tslint:disable-next-line:max-line-length
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImE2ZjA2ZjRiLTA2ZjUtNGYxZi05NjE0LTkyYTlkYWNiMjJhZiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTU3NDIxMDQ1OSwiZXhwIjoxNTc0ODE1MjU5LCJpYXQiOjE1NzQyMTA0NTl9.wcfrVam8ULawK8iYpZlZqD3_SBolWEDdHPhYVXLDIYE',
      roles: ['Admin'],
      email: 'itacdp1661@gmail.com',
      personId: '18',
      id: 'a6f06f4b-06f5-4f1f-9614-92a9dacb22af'
    };
  });

  it('service should be created', () => {
    const service: AuthStateService = TestBed.get(AuthStateService);
    expect(service).toBeTruthy();
  });
});
