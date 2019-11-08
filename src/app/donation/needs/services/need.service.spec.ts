import { NeedService } from './need.service';
import { Need } from '../models/need.interface';
import { of } from 'rxjs';
import { HttpParams } from '@angular/common/http';

describe('NeedService', () => {
  let service: NeedService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    needsApi: string
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new NeedService(httpClientSpy as any, configServiceSpy as any);
    configUrl = {
      needsApi: 'https://familynetserver.azurewebsites.net/api/v1/donations'
    };
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method getNeeds', () => {
    let mockNeeds: Need[];
    beforeEach(() => {
      mockNeeds = [
        {
          id: 1, city: 'Днепр', orphanageID: 54, donationItemID: 1, status: 'Sended',
          lastDateWhenStatusChanged: '2019-10-26T09:27:31.2431168',
          orphanageName: 'NameS124', itemName: 'Футболка', itemDescription: 'Размер XS', types: []
        },
        {
          id: 2, city: 'Днепр', orphanageID: 53, donationItemID: 2, status: 'Sended',
          lastDateWhenStatusChanged: '2019-10-26T09:28:22.6096282',
          orphanageName: 'CD100', itemName: 'Тапки', itemDescription: 'Тапки 48го размера', types: []
        }
      ];

      httpClientSpy.get.and.returnValue(of(mockNeeds));
    });

    it('should get all Needs', (done: DoneFn) => {
      service.getNeeds().subscribe((needs: Need[]) => {
        expect(needs).toEqual(mockNeeds);
        done();
      });
    });

    it('should set search params to get request for needs list', (done: DoneFn) => {
      const searchValue = 'Тапки';
      let params = new HttpParams();
      params = params.set('forSearch', searchValue);

      service.getNeeds({ forSearch: searchValue }).subscribe((needs: Need[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.needsApi, { params });
        done();
      });
    });
  });

});
