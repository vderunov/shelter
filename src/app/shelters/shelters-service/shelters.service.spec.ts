import { TestBed, inject } from '@angular/core/testing';
import { SheltersService } from './shelters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Shelter } from '../models/shelter.interface';
import { async } from '@angular/core/testing';

describe('SheltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SheltersService]
  }));

  it('should be created', inject([SheltersService], (service: SheltersService) => {
    expect(service).toBeTruthy();
  }))

  // it('should get filtered shelter list', inject([SheltersService], async (service: SheltersService) => {
  //   const searchValue = "";

  //   const shelters = await service.getShelters().toPromise();
  //   expect(shelters).toBeTruthy();

  // }));

  it('should get filtered shelter list', inject([SheltersService], (service: SheltersService) => {
    service.getShelters().subscribe((shelters: Array<Shelter>) => {
      expect(shelters).toBeTruthy();
    });
  }));

  // it('should get filtered shelter list', inject([SheltersService], (service: SheltersService) => {
  //   const searchValue = "";

  //   service.getShelters().subscribe((shelters: Array<Shelter>) => {
  //     expect(shelters.every((shelterObj: Shelter) => {
  //       return shelterObj.name.indexOf(searchValue) > -1;
  //     })).toBeTruthy();
  //   });

  // }));

  it('should get shelter by ID', inject([SheltersService, HttpTestingController], (service: SheltersService, httpMock: HttpTestingController) => {
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
