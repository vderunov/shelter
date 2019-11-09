import { HelpersService } from './helper.service';
import { Helper } from '../models/helper.interface';
import { of } from 'rxjs';
import { HttpParams } from '@angular/common/http';

describe('HelpersService', () => {
  let service: HelpersService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    helpersApi: string
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new HelpersService(httpClientSpy as any, configServiceSpy as any);
    configUrl = {
      helpersApi: 'https://familynetserver.azurewebsites.net/api/v1/volunteers/'
    };
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method getAllHelpers', () => {
    let mockHelpers: Helper[];
    beforeEach(() => {
      mockHelpers = [
        {
          id: 54, name: 'Олег', surname: 'Петренко', patronymic: 'Дмитреевич', birthday: '1954-12-30T00:00:00',
          rating: 5.0, avatar: null, childrenHouseID: 53, emailID: 0,
          photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer2.jpg'
        },
        {
          id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', birthday: '1954-12-30T00:00:00',
          rating: 5.0, avatar: null, childrenHouseID: 54, emailID: 0,
          photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer1.jpg'
        }
      ];

      httpClientSpy.get.and.returnValue(of(mockHelpers));
    });

    it('should get all Helpers', (done: DoneFn) => {
      service.getAllHelpers().subscribe((helper: Helper[]) => {
        expect(helper).toEqual(mockHelpers);
        done();
      });
    });

    it('should set search params to get request for helpers list', (done: DoneFn) => {
      const searchValue = 'Ривский';
      let params = new HttpParams();
      params = params.set('name', searchValue);

      service.getAllHelpers({ name: searchValue }).subscribe((helper: Helper[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.helpersApi, { params });
        done();
      });
    });
  });

});
