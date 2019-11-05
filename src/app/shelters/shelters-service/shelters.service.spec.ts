import { TestBed, inject } from '@angular/core/testing';
import { SheltersService } from './shelters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Shelter } from '../models/shelter.interface';

describe('SheltersService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SheltersService]
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('should be created', inject([SheltersService], (service: SheltersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get filtered shelter list', inject([SheltersService, HttpTestingController], (service: SheltersService, httpMock: HttpTestingController) => {
    (done: DoneFn) => {
    const mockShelters = [
      {"id":53,"name":"Ромашка","adressID":114,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"},
      {"id":57,"name":"Ромашка","adressID":124,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"}
    ];

    const req = httpMock.expectOne('https://familynetserver.azurewebsites.net/api/v1/childrenHouse/?name=Ромашка');
    req.flush(mockShelters);

    service.getShelters({name: 'Ромашка'}).subscribe((shelters: Shelter[]) => {
      expect(shelters).toEqual(mockShelters);
      done();
    });

  }}));

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
