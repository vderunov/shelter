import { SheltersService } from './shelters.service';
import { Shelter } from '../models/shelter.interface';
import { BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';

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
      {"id":53,"name":"Ромашка","adressID":114,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"}
    ];

    configServiceSpy.getConfig.and.returnValue(of(configUrl).pipe(take(1)));
    httpClientSpy.get.and.returnValue([mockShelters]);

    service.getShelters().subscribe((shelters: Shelter[]) => {
      expect(shelters).toEqual(mockShelters);
      done();
    });

  });

  // xit('should get filtered shelter list', () => {
  //   (done: DoneFn) => {
  //   const mockShelters = [
  //     {"id":53,"name":"Ромашка","adressID":114,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"},
  //     {"id":57,"name":"Ромашка","adressID":124,"rating":11.0,"avatar":null,"locationID":null,"photoPath":"https://familynetserver.azurewebsites.net/3nf3pby0.jpg"}
  //   ];

  //   const req = httpMock.expectOne('https://familynetserver.azurewebsites.net/api/v1/childrenHouse/?name=Ромашка');
  //   req.flush(mockShelters);

  //   service.getShelters({name: 'Ромашка'}).subscribe((shelters: Shelter[]) => {
  //     expect(shelters).toEqual(mockShelters);
  //     done();
  //   });

  // }}));

  // it('should get filtered shelter list', inject([SheltersService], (service: SheltersService) => {
  //   const searchValue = "";

  //   service.getShelters().subscribe((shelters: Array<Shelter>) => {
  //     expect(shelters.every((shelterObj: Shelter) => {
  //       return shelterObj.name.indexOf(searchValue) > -1;
  //     })).toBeTruthy();
  //   });

  // }));

//   xit('should get shelter by ID', inject([SheltersService, HttpTestingController], (service: SheltersService, httpMock: HttpTestingController) => {
//     const mockShelters = {
//       id: 55,
//       name: 'Артек',
//       avatar: '1',
//       rating: 5
//     };

//     service.getShelter('https://familynetserver.azurewebsites.net/api/v1/childrenHouse', '55').subscribe((shelter: Shelter) => {
//       expect(shelter.id).toEqual(mockShelters.id);
//     });

//     const req = httpMock.expectOne('https://familynetserver.azurewebsites.net/api/v1/childrenHouse/55');
//     req.flush(mockShelters);

//   }));
});
