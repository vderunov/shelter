import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperItemComponent } from './helper-item.component';

describe('HelperItemComponent', () => {
  let component: HelperItemComponent;
  let fixture: ComponentFixture<HelperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
