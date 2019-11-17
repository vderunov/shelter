
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ManagersService } from '../services/manager.service';
import { Manager } from '../models/manager.model';
import { of } from 'rxjs';
import { ManagersListComponent } from './managers-list.component';

describe('ManagersListComponent', () => {
  let component: ManagersListComponent;
  let fixture: ComponentFixture<ManagersListComponent>;
  let managerServiceStub: Partial<ManagersService>;
  let managerService: ManagersService;

  const mockManagers: Manager[] = [
    {
      id: 3,
      name: 'Tomas',
      surname: 'Timonov',
      patronymic: 'Stivenovich',
      birthday: '1999-11-30T00:00:00',
      rating: 3,
      avatar: null,
      emailID: 0,
      childrenHouseID: 2,
      photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer2.jpg',
    },
    {
      id: 59,
      name: 'Марина',
      surname: 'Кричич',
      patronymic: 'Михайловна',
      birthday: '1954-12-30T00:00:00',
      rating: 9,
      avatar: null,
      childrenHouseID: 9,
      emailID: 0,
      photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer1.jpg'
    },
  ];

  beforeEach(() => {
    managerServiceStub = {
      getAllManagers(paramObj: object = {}) {
        return of(mockManagers);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ManagersListComponent],
      providers: [{ provide: ManagersService, useValue: managerServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ManagersListComponent);
    component = fixture.componentInstance;
    managerService = fixture.debugElement.injector.get(ManagersService);
  });

  it('Expect to receive list of managers', () => {
    spyOn(managerService, 'getAllManagers').and.returnValue(of(mockManagers));
    component.ngOnInit();
    component.managers$.subscribe((managers: Manager[]) => {
      expect(managers).toEqual(mockManagers);
    });
  });

  it('Expect to receive manager Id', () => {
    expect(component.trackByManagers(1, mockManagers[1])).toEqual(59);
  });

  it('Expect to check params in onSearch method', () => {
    spyOn(managerService, 'getAllManagers').and.returnValue(of(mockManagers));
    const searchValue = 'Timonov';
    component.onSearch(searchValue);
    expect(managerService.getAllManagers).toHaveBeenCalledWith({ name: 'Timonov' });
  });

});
