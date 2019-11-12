import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsItemComponent } from './needs-item.component';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NeedsItemDetailsComponent } from '../needs-item-details/needs-item-details.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NeedsItemComponent', () => {
  let component: NeedsItemComponent;
  let fixture: ComponentFixture<NeedsItemComponent>;
  let needDe: DebugElement;
  let needEl: HTMLElement;

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

    needDe  = fixture.debugElement.query(By.css('.need'));
    needEl = needDe.nativeElement;
    component.need = mockNeed;

    fixture.detectChanges();
  });

  it('Expected displaing orphanage\'s name in uppercase', () => {
    const expectedPipedName = mockNeed.orphanageName.toUpperCase();
    expect(needEl.textContent).toContain(expectedPipedName);
  });

  it('Expected displaing date in format dd/mm/yyy', () => {
    const expectedPipedDate = '26/10/2019';
    expect(needEl.textContent).toContain(expectedPipedDate);
  });
});
