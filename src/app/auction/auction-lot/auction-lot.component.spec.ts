import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLotComponent } from './auction-lot.component';

describe('AuctionLotComponent', () => {
  let component: AuctionLotComponent;
  let fixture: ComponentFixture<AuctionLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
