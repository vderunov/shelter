import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestsItemComponent } from './quests-item.component';

xdescribe('QuestsItemComponent', () => {
  let component: QuestsItemComponent;
  let fixture: ComponentFixture<QuestsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
