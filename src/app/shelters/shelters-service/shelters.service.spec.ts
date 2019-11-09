import { SheltersService } from './shelters.service';
import { Shelter } from '../models/shelter.interface';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { AddressShelter } from '../models/address-shelter.interface';

describe('SheltersService', () => {
  let service: SheltersService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    sheltersApi: string,
    childrenApi: string,
    representativesApi: string,
    addressApi: string
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new SheltersService(<any> httpClientSpy, <any> configServiceSpy);
    configUrl = {
      'sheltersApi': 'https://familynetserver.azurewebsites.net/api/v1/childrenHouse',
      'childrenApi': 'https://familynetserver.azurewebsites.net/api/v1/children/',
      'representativesApi': 'https://familynetserver.azurewebsites.net/api/v1/representatives/',
      'addressApi': 'https://familynetserver.azurewebsites.net/api/v1/address'
    };
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method getShelters', () => {
    let mockAnswerForApi: object;
    let mockShelters: Shelter[];
    beforeEach(() => {
      mockAnswerForApi = {
        'https://familynetserver.azurewebsites.net/api/v1/childrenHouse': [
          {'id': 53, 'name': 'Ромашка', 'adressID': 114, 'rating': 11.0},
          {'id': 54, 'name': 'Лопухи', 'adressID': 115, 'rating': 12.0}
        ],
        'https://familynetserver.azurewebsites.net/api/v1/children/': [
          {
            'id': 110,
            'name': 'Глеб',
            'surname': 'Левада',
            'patronymic': 'Русланович',
            'childrenHouseID': 53,
            'childrenHouseName': 'Ромашка'
          },
          {
            'id': 111,
            'name': 'Олег',
            'surname': 'Курасов',
            'patronymic': 'Михайлович',
            'childrenHouseID': 54,
            'childrenHouseName': 'Лопухи'
          },
        ],
        'https://familynetserver.azurewebsites.net/api/v1/representatives/': [
          {'id': 54, 'name': 'Олег', 'surname': 'Петренко', 'patronymic': 'Дмитреевич', 'childrenHouseID': 53},
          {'id': 55, 'name': 'Марина', 'surname': 'Кричич', 'patronymic': 'Михайловна', 'childrenHouseID': 54}
        ],
        'https://familynetserver.azurewebsites.net/api/v1/address': [
          {'id': 114, 'country': 'Украина', 'region': 'Днепропетровская', 'city': 'Днепр', 'street': 'Артема', 'house': '250'},
          {'id': 115, 'country': 'Украина', 'region': 'Днепропетровская', 'city': 'Днепр', 'street': 'Гагарина', 'house': '122'}
        ]
      };

      mockShelters = [
        {
          id: 53,
          name: 'Ромашка',
          adressID: 114,
          rating: 11.0,
          children: 1,
          representative: {id: 54, name: 'Олег', surname: 'Петренко', patronymic: 'Дмитреевич', childrenHouseID: 53},
          address: {id: 114, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Артема', house: '250'}
        },
        {
          id: 54,
          name: 'Лопухи',
          adressID: 115,
          rating: 12,
          children: 1,
          representative: {id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', childrenHouseID: 54},
          address: {id: 115, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Гагарина', house: '122'}
        }];

      configServiceSpy.getConfig.and.returnValue(of(configUrl));
      httpClientSpy.get.and.callFake(api => of(mockAnswerForApi[api]));
    });

    it('should get all Shelters', (done: DoneFn) => {
      service.getShelters().subscribe((shelters: Shelter[]) => {
        expect(shelters).toEqual(mockShelters);
        done();
      });
    });

    it('should set search params to get request for shelter list', (done: DoneFn) => {
      const searchValue = 'Ромашка';
      let params = new HttpParams();
      params = params.set('name', searchValue);

      service.getShelters({name: searchValue}).subscribe((shelters: Shelter[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.sheltersApi, {params});
        done();
      });
    });
  });


  describe('Method RegisterAddressShelter', () => {
    it('create post request with address data', (done: DoneFn) => {
      const url = 'https://familynetserver.azurewebsites.net/api/v1/address';
      const addressData: AddressShelter = {
        country: 'USA',
        region: 'Springfield',
        city: 'Springfield',
        street: '742 Evergreen Terrace',
        house: '25'
      };
      const mockAnswer: AddressShelter = {
        country: 'USA',
        region: 'Springfield',
        city: 'Springfield',
        street: '742 Evergreen Terrace',
        house: '25',
        id: 135
      };
      httpClientSpy.post.and.returnValues(of(mockAnswer));
      service.registerAddressShelter(url, addressData).subscribe((response: AddressShelter) => {
        expect(response).toEqual(mockAnswer);
        done();
      });
  });

    it('create post request with shelter data', (done: DoneFn) => {
      const url = 'https://familynetserver.azurewebsites.net/api/v1/childrenHouse';
      const addressData: Shelter = {
        name: 'SUM 41',
        rating: 33,
        adressID: 97,
        avatar: null,
        locationID: null,
        id: 122
      };
      const mockAnswer: Shelter = {
        name: 'SUM 41',
        avatar: null,
        rating: 22,
        adressID: null,
        locationID: null,
        id: 135,
        photoPath: '127126e178dh1hd71'
      };
      httpClientSpy.post.and.returnValues(of(mockAnswer));
      service.registrationShelter(url, addressData).subscribe((response: Shelter) => {
        expect(response).toEqual(mockAnswer);
        done();
      });
    });
  });
});
