// import { TestBed } from '@angular/core/testing';
// import { Manager } from '../models/manager.model';
// import { of } from 'rxjs';
// import { HttpParams } from '@angular/common/http';
// import { AdminUserService } from './admin-user.service';
// import { Helper } from '../models/helper.model';

// describe('AdminUserService', () => {
//     let service: AdminUserService;
//     let httpClientSpy: { get: jasmine.Spy };
//     let configServiceSpy: { getConfig: jasmine.Spy };
//     let configUrl: {
//         managersApi: string,
//         helpersApi: string
//     };

//     beforeEach(() => {
//         httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//         configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
//         service = new AdminUserService(httpClientSpy as any, configServiceSpy as any);
//         configUrl = {
//             managersApi: 'https://familynetserver.azurewebsites.net/api/v1/representatives/',
//             helpersApi: 'https://familynetserver.azurewebsites.net/api/v2/volunteers/'
//         };
//         configServiceSpy.getConfig.and.returnValue(of(configUrl));
//     });

//     it('service should be created', () => {
//         expect(service).toBeTruthy();
//     });

//     describe('Method getAllManagers', () => {
//         let mockRepresentatives: Manager[];
//         beforeEach(() => {
//             mockRepresentatives = [
//                 {
//                     id: 19,
//                     name: 'Геннадий',
//                     surname: 'Шевченко',
//                     patronymic: 'Николаевич',
//                     birthday: '1990 - 01 - 01T00: 00: 00',
//                     rating: 10.0,
//                     avatar: null,
//                     emailID: 0,
//                     photoPath: 'https://familynetserver.azurewebsites.net/',
//                     childrenHouseID: 54
//                 },
//                 {
//                     id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', birthday: '1954-12-30T00:00:00',
//                     rating: 5, avatar: null, childrenHouseID: 54, emailID: 0,
//                     photoPath: 'https://familynetserver.azurewebsites.net/'
//                 }
//             ];
//             httpClientSpy.get.and.returnValue(of(mockRepresentatives));
//         });

//         it('should get all Managers', (done: DoneFn) => {
//             service.getAllManagers().subscribe((managers: Manager[]) => {
//                 expect(managers).toEqual(mockRepresentatives);
//                 done();
//             });
//         });

//         it('should set search params to get request for managers list', (done: DoneFn) => {
//             const searchValue = 'Олег';
//             let params = new HttpParams();
//             params = params.set('name', searchValue);
//             service.getAllManagers({ name: searchValue }).subscribe((managers: Manager[]) => {
//                 expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.managersApi, { params });
//                 done();
//             });
//         });
//     });

//     describe('Method getAllHelpers', () => {
//         let mockHelpers: Helper[];
//         beforeEach(() => {
//             mockHelpers = [
//                 {
//                     id: 19,
//                     name: 'Геннадий',
//                     surname: 'Шевченко',
//                     patronymic: 'Николаевич',
//                     birthday: '1990 - 01 - 01T00: 00: 00',
//                     rating: 10.0,
//                     avatar: null,
//                     emailID: 0,
//                     photoPath: 'https://familynetserver.azurewebsites.net/',
//                     addressID: null
//                 },
//                 {
//                     id: 7,
//                     name: 'Тимон',
//                     surname: 'Акунаматата',
//                     patronymic: 'Николаевич',
//                     birthday: '1990 - 01 - 01T00: 00: 00',
//                     rating: 5,
//                     avatar: null,
//                     emailID: 0,
//                     photoPath: 'https://familynetserver.azurewebsites.net/',
//                     addressID: null
//                 }
//             ];
//             httpClientSpy.get.and.returnValue(of(mockHelpers));
//         });

//         it('should get all Helpers', (done: DoneFn) => {
//             service.getAllHelpers().subscribe((helpers: Helper[]) => {
//                 expect(helpers).toEqual(mockHelpers);
//                 done();
//             });
//         });
//         it('should set search params to get request for managers list', (done: DoneFn) => {
//             const searchValue = 'Геннадий';
//             let params = new HttpParams();
//             params = params.set('name', searchValue);
//             service.getAllHelpers({ name: searchValue }).subscribe((helpers: Helper[]) => {
//                 expect(httpClientSpy.get).toHaveBeenCalledWith(configUrl.helpersApi, { params });
//                 done();
//             });
//         });
//     });

// });

