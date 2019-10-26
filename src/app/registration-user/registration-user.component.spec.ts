import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUserComponent } from './registration-user.component';

xdescribe('RegistrationUserComponent', () => {
  let component: RegistrationUserComponent;
  let fixture: ComponentFixture<RegistrationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationUserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
