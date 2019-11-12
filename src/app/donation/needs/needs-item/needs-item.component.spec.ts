import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsItemComponent } from './needs-item.component';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NeedsItemDetailsComponent } from '../needs-item-details/needs-item-details.component';

describe('NeedsItemComponent', () => {
  let component: NeedsItemComponent;
  let fixture: ComponentFixture<NeedsItemComponent>;

  const mockNeed = {
    id: 1,
    city: 'Днепр',
    orphanageID: 54,
    donationItemID: 1,
    status: 'Sended',
    lastDateWhenStatusChanged: '2019-10-26T09:27:31.2431168',
    orphanageName: 'NameS124',
    itemName: 'Футболка',
    itemDescription: 'Размер XS'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsItemComponent, NeedsItemDetailsComponent ],
      imports: [ RouterTestingModule, MatCardModule ]
    });

    fixture = TestBed.createComponent(NeedsItemComponent);
    component = fixture.componentInstance;
    component.need = mockNeed;

    fixture.detectChanges();
  });

  it('should create component needs item', () => {
    expect(component).toBeTruthy();
  });
});
