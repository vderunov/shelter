import { SheltersService } from './shelters.service';
import { Shelter } from '../models/shelter.interface';
import { HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

describe('SheltersService', () => {
  let service: SheltersService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy : { getConfig: jasmine.Spy };
  
  beforeEach(() => { 
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new SheltersService(<any> httpClientSpy, <any> configServiceSpy);
   });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Shelters', (done: DoneFn) => {
    const configUrl = {
      "sheltersApi": "https://familynetserver.azurewebsites.net/api/v1/childrenHouse"
    }
    const mockShelters = [
      {"id":53,"name":"Ромашка","adressID":114,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"},
      {"id":54,"name":"Ромашка","adressID":114,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"}
    ];

    configServiceSpy.getConfig.and.returnValue(of(configUrl));
    httpClientSpy.get.and.returnValue(of(mockShelters));

    service.getShelters().subscribe((shelters: Shelter[]) => {
      expect(shelters).toEqual(mockShelters);
      done();
    });
  });

  it('should get list of Shelters filtered by name "Золушка"', (done: DoneFn) => {
    const saerchValue = "Золушка";
    let params = new HttpParams();
    params = params.set("name", saerchValue);

    const configUrl = {
      "sheltersApi": "https://familynetserver.azurewebsites.net/api/v1/childrenHouse"
    };
    const mockShelters = [
      {"id":14,"name":"Золушка","adressID":115,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3123pby0.jpg"},
      {"id":54,"name":"Золушка","adressID":115,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3123pby0.jpg"}
    ];

    configServiceSpy.getConfig.and.returnValue(of(configUrl));
    httpClientSpy.get.and.returnValue(of(mockShelters));

    service.getShelters({name: saerchValue}).subscribe((shelters: Shelter[]) => {
      expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.sheltersApi, { params });
      expect(shelters).toEqual(mockShelters);
      done();
    });
  });

});
