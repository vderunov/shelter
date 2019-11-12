import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NeedsComponent } from './needs.component';
import { NeedService } from '../services/need.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Need } from '../models/need.interface';

describe('NeedsComponent', () => {
  let component: NeedsComponent;
  let fixture: ComponentFixture<NeedsComponent>;
  let needServiceStub: Partial<NeedService>;
  let needService: NeedService;

  const mockNeeds: Need[] = [
    {
      orphanageName: 'bfnf',
      lastDateWhenStatusChanged: '2019-13-26T09:27:31.2431168',
      status: 'Sended',
      city: 'Днепр',
      itemName: 'Тапки',
      donationItemID: 12
    },
    {
      orphanageName: 'bfnf',
      lastDateWhenStatusChanged: '2019-13-26T09:27:31.2431168',
      status: 'Sended',
      city: 'Днепр',
      itemName: 'ghj',
      donationItemID: 13
    },
  ];

  beforeEach(() => {
    needServiceStub = {
      getNeeds(paramObj: object = {}) {
        return of(mockNeeds);
      }
    };

    TestBed.configureTestingModule({
       declarations: [ NeedsComponent ],
       providers: [ {provide: NeedService, useValue: needServiceStub } ],
       schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(NeedsComponent);
    component = fixture.componentInstance;
    needService = fixture.debugElement.injector.get(NeedService);
  });

  it('Expect to receive list of needs', () => {
    spyOn(needService, 'getNeeds').and.returnValue(of(mockNeeds));
    component.ngOnInit();

    component.needs$.subscribe((needs: Need[]) => {
      expect(needs).toEqual(mockNeeds);
    });
  });

  it('Expect to receive donationItemId', () => {
    expect(component.trackById(1, mockNeeds[1])).toEqual(13);
  });

  it('Expect to check params in onSearch method', () => {
    spyOn(needService, 'getNeeds').and.returnValue(of(mockNeeds));
    const searchValue = 'Тапки';
    component.onSearch(searchValue);
    expect(needService.getNeeds).toHaveBeenCalledWith({ forSearch: searchValue });
  });
});
