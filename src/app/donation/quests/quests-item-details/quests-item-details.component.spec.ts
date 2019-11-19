import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestsItemDetailsComponent } from './quests-item-details.component';

xdescribe('QuestsItemDetailsComponent', () => {
  let component: QuestsItemDetailsComponent;
  let fixture: ComponentFixture<QuestsItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestsItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
