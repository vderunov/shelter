import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersListComponent } from './helpers-list.component';

xdescribe('HelpersListComponent', () => {
  let component: HelpersListComponent;
  let fixture: ComponentFixture<HelpersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
