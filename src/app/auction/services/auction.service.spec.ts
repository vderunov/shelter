import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';

xdescribe('AuctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: AuctionService = TestBed.get(AuctionService);
    expect(service).toBeTruthy();
  });
});
