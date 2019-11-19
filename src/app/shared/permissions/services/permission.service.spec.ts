import { TestBed } from '@angular/core/testing';

import { PermissionService } from './permission.service';

xdescribe('PermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: PermissionService = TestBed.get(PermissionService);
    expect(service).toBeTruthy();
  });
});
