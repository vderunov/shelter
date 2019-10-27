import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersComponent } from './helpers.component';

xdescribe('HelpersComponent', () => {
  let component: HelpersComponent;
  let fixture: ComponentFixture<HelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
