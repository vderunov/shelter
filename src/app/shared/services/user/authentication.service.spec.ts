import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

xdescribe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
