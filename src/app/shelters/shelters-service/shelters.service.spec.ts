import { SheltersService } from './shelters.service';
import { Shelter } from '../models/shelter.interface';
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

  it('should get allShelters', (done: DoneFn) => {
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
});
