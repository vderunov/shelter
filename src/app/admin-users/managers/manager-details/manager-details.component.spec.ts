import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailsComponent } from './manager-details.component';

xdescribe('ManagerDetailsComponent', () => {
  let component: ManagerDetailsComponent;
  let fixture: ComponentFixture<ManagerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
