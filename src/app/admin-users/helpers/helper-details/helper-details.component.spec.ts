import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperDetailsComponent } from './helper-details.component';

xdescribe('HelperDetailsComponent', () => {
  let component: HelperDetailsComponent;
  let fixture: ComponentFixture<HelperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
