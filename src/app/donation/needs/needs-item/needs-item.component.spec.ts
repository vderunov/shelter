import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsItemComponent } from './needs-item.component';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NeedsItemDetailsComponent } from '../needs-item-details/needs-item-details.component';
import { By } from '@angular/platform-browser';
import { Need } from '../models/need.interface';

xdescribe('NeedsItemComponent', () => {
  let component: NeedsItemComponent;
  let fixture: ComponentFixture<NeedsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsItemComponent, NeedsItemDetailsComponent ],
      imports: [ RouterTestingModule, MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsItemComponent);
    component = fixture.componentInstance;

    const needDe  = fixture.debugElement.query(By.css('.need'));
    const needEl = needDe.nativeElement;

    const expectedNeed = {
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

    component.need = expectedNeed;

    fixture.detectChanges();
  });

  xit('should create needs item', () => {
    expect(component).toBeTruthy();
  });
});
