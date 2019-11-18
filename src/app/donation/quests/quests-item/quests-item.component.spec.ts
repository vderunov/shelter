import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestsItemComponent } from './quests-item.component';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestsItemComponent', () => {
  let component: QuestsItemComponent;
  let fixture: ComponentFixture<QuestsItemComponent>;

  const mockQuests = {
    id: 1,
    name: 'Delivery',
    status: 'needed',
    donationDescription: 'To deliver books',
    orphanageName: 'NameS124',
    orphanageID: 1,
    volunteerID: '',
    fromDate: '2019-10-26T09:27:31.2431168',
    toDate: '2019-11-26T09:27:31.2431168'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestsItemComponent ],
      imports: [ RouterTestingModule, MatCardModule ]
    });

    fixture = TestBed.createComponent(QuestsItemComponent);
    component = fixture.componentInstance;
    component.quest = mockQuests;

    fixture.detectChanges();
  });

  it('should create component quests item', () => {
    expect(component).toBeTruthy();
  });
});
