import { TestBed } from '@angular/core/testing';
import { NeedService } from './need.service';

xdescribe('NeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: NeedService = TestBed.get(NeedService);
    expect(service).toBeTruthy();
  });
});