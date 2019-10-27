import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedCardDetailsComponent } from './need-card-details.component';

describe('NeedCardDetailsComponent', () => {
  let component: NeedCardDetailsComponent;
  let fixture: ComponentFixture<NeedCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
