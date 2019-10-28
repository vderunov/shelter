import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestsListComponent } from './quests-list.component';

xdescribe('QuestsListComponent', () => {
  let component: QuestsListComponent;
  let fixture: ComponentFixture<QuestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
