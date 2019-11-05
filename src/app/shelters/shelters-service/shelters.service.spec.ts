import { TestBed, inject } from '@angular/core/testing';
import { SheltersService } from './shelters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Shelter } from '../models/shelter.interface';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


describe('SheltersService', () => {
  let service: SheltersService;
  let httpClientSpy: { get: jasmine.Spy };
  let configServiceSpy : { getConfig: jasmine.Spy };
  
  beforeEach(() => { 
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    service = new SheltersService(<any> httpClientSpy, <any> configServiceSpy);
   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  xit('should get filtered shelter list', (done: DoneFn) => {
    const expectedHeroes: Hero[] =
    [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
    

  });

  xit('should get filtered shelter list', inject([SheltersService], (service: SheltersService) => {
    service.getShelters().subscribe((shelters: Array<Shelter>) => {
      expect(shelters).toBeTruthy();
    });
  }));

  xit('should get filtered shelter list', inject([SheltersService], (service: SheltersService) => {
    const searchValue = "";

    service.getShelters().subscribe((shelters: Array<Shelter>) => {
      expect(shelters.every((shelterObj: Shelter) => {
        return shelterObj.name.indexOf(searchValue) > -1;
      })).toBeTruthy();
    });

  }));

  xit('should get shelter by ID', inject([SheltersService, HttpTestingController], (service: SheltersService, httpMock: HttpTestingController) => {
    const mockShelters = {
      id: 55,
      name: 'Артек',
      avatar: '1',
      rating: 5
    };
    
    service.getShelter('https://familynetserver.azurewebsites.net/api/v1/childrenHouse', '55').subscribe((shelter: Shelter) => {
      expect(shelter.id).toEqual(mockShelters.id);
    });

    const req = httpMock.expectOne('https://familynetserver.azurewebsites.net/api/v1/childrenHouse/55');
    req.flush(mockShelters);
  }));
});
