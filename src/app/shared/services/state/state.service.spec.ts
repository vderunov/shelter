import { TestBed } from '@angular/core/testing';

import { AuthStateService } from './auth-state.service';

xdescribe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: AuthStateService = TestBed.get(AuthStateService);
    expect(service).toBeTruthy();
  });
});
