import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

xdescribe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});