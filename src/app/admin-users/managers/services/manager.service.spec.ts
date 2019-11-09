import { ManagersService } from './manager.service';
import { Manager } from '../models/manager.interface';
import { of } from 'rxjs';
import { HttpParams } from '@angular/common/http';

describe('ManagersService', () => {
  let service: ManagersService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    managersApi: string
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new ManagersService(httpClientSpy as any, configServiceSpy as any);
    configUrl = {
      managersApi: 'https://familynetserver.azurewebsites.net/api/v1/representatives/'
    };
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method getAllManagers', () => {
    let mockRepresentatives: Manager[];
    beforeEach(() => {
      mockRepresentatives = [
        {
          id: 54, name: 'Олег', surname: 'Петренко', patronymic: 'Дмитреевич', birthday: '1954-12-30T00:00:00',
          rating: 5.0, avatar: null, childrenHouseID: 53, emailID: 0,
          photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_representatives2.jpg'
        },
        {
          id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', birthday: '1954-12-30T00:00:00',
          rating: 5.0, avatar: null, childrenHouseID: 54, emailID: 0,
          photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_representatives1.jpg'
        }
      ];

      httpClientSpy.get.and.returnValue(of(mockRepresentatives));
    });

    it('should get all Managers', (done: DoneFn) => {
      service.getAllManagers().subscribe((managers: Manager[]) => {
        expect(managers).toEqual(mockRepresentatives);
        done();
      });
    });

    it('should set search params to get request for managers list', (done: DoneFn) => {
      const searchValue = 'Ривский';
      let params = new HttpParams();
      params = params.set('name', searchValue);

      service.getAllManagers({ name: searchValue }).subscribe((managers: Manager[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.managersApi, { params });
        done();
      });
    });
  });

});
