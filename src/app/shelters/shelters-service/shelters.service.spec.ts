import { SheltersService } from './shelters.service';
import { Shelter } from '../models/shelter.interface';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

describe('SheltersService', () => {
  let service: SheltersService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let configUrl: {
    sheltersApi: string;
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new SheltersService(<any>httpClientSpy, <any>configServiceSpy);
    configUrl = {
      "sheltersApi": "https://familynetserver.azurewebsites.net/api/v1/childrenHouse"
    }
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests of getShelters method', () => {
    let mockShelters: Shelter[];
    beforeEach(() => {
      mockShelters = [
        { "id": 53, "name": "Ромашка", "adressID": 114, "rating": 11.0, "avatar": null, "locationID": null, "photoPath": "https://familynetserver.azurewebsites.net/3nf3pby0.jpg" },
        { "id": 54, "name": "Ромашка", "adressID": 115, "rating": 12.0, "avatar": null, "locationID": null, "photoPath": "https://familynetserver.azurewebsites.net/4nf3pby0.jpg" }
      ];
      configServiceSpy.getConfig.and.returnValue(of(configUrl));
      httpClientSpy.get.and.returnValue(of(mockShelters));
    });

    it('should get all Shelters', (done: DoneFn) => {
      service.getShelters().subscribe((shelters: Shelter[]) => {
        expect(shelters).toEqual(mockShelters);
        done();
      });
    });

    it('should get list of Shelters filtered by name "Ромашка"', (done: DoneFn) => {
      const searchValue = "Ромашка";
      let params = new HttpParams();
      params = params.set("name", searchValue);

      service.getShelters({ name: searchValue }).subscribe((shelters: Shelter[]) => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.sheltersApi, { params });
        done();
      });
    });
  })

});
