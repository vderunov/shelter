import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedCardComponent } from './need-card.component';

describe('NeedCardComponent', () => {
  let component: NeedCardComponent;
  let fixture: ComponentFixture<NeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
