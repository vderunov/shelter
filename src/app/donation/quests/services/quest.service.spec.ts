import { QuestService } from './quest.service';
import { Quest } from '../models/quest.interface';
import { of } from 'rxjs';
import { HttpParams } from '@angular/common/http';

describe('QuestService', () => {
  let service: QuestService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    questsApi: string
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new QuestService(httpClientSpy as any, configServiceSpy as any);
    configUrl = {
      questsApi: 'https://familynetserver.azurewebsites.net/api/v1/quests'
    };
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method getQuests', () => {
    let mockQuests: Quest[];
    beforeEach(() => {
      mockQuests = [
        {
          id: 1, city: 'Сумы', orphanageID: 54, charityMakerID: null, itemID: 1, status: 'Sended',
          lastDateWhenStatusChanged: '2019-10-26T09:27:31.2431168', orphanageName: 'Эльф',
          itemName: 'Покрасить забор', types: []
        },
        {
          id: 2, city: 'Херсон', orphanageID: 53, charityMakerID: null, itemID: 2, status: 'Sended',
          lastDateWhenStatusChanged: '2019-10-26T09:28:22.6096282', orphanageName: 'Ромашка',
          itemName: 'Привезти материалы', types: []
        }
      ];

      httpClientSpy.get.and.returnValue(of(mockQuests));
    });

    it('should get all Quests', (done: DoneFn) => {
      service.getQuests().subscribe((quests: Quest[]) => {
        expect(quests).toEqual(mockQuests);
        done();
      });
    });

    it('should set search params to get request for quests list', (done: DoneFn) => {
      const searchValue = 'Тапки';
      let params = new HttpParams();
      params = params.set('forSearch', searchValue);

      service.getQuests({ forSearch: searchValue }).subscribe((quests: Quest[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.questsApi, { params });
        done();
      });
    });
  });

});
