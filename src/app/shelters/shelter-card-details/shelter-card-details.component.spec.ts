import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterCardDetailsComponent } from './shelter-card-details.component';

xdescribe('ShelterCardDetailsComponent', () => {
  let component: ShelterCardDetailsComponent;
  let fixture: ComponentFixture<ShelterCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterCardDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
