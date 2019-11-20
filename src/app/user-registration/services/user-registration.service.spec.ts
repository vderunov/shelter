import { TestBed } from '@angular/core/testing';
import { UserRegistrationService } from './user-registration.service';

xdescribe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegistrationService = TestBed.get(UserRegistrationService);
    expect(service).toBeTruthy();
  });
});
