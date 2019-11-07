import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersListComponent } from './managers-list.component';

xdescribe('ManagersListComponent', () => {
  let component: ManagersListComponent;
  let fixture: ComponentFixture<ManagersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
