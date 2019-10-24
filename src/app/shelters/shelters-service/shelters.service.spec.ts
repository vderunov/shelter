import { TestBed } from '@angular/core/testing';

import { SheltersService } from './shelters.service';

describe('SheltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheltersService = TestBed.get(SheltersService);
    expect(service).toBeTruthy();
  });
});
