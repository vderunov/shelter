import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HelpersListComponent } from './user-list.component';
import { AdminUserService } from '../services/admin-user.service';
import { Helper } from '../models/helper.model';
import { of } from 'rxjs';

describe('HelpersListComponent', () => {
  let component: HelpersListComponent;
  let fixture: ComponentFixture<HelpersListComponent>;
  let helperServiceStub: Partial<AdminUserService>;
  let helperService: AdminUserService;

  const mockHelpers: Helper[] = [
    {
      id: 3,
      name: 'Stive',
      surname: 'Stivenson',
      patronymic: 'Stivenovich',
      birthday: '1999-11-30T00:00:00',
      rating: 3,
      avatar: null,
      emailID: 0,
      addressID: 1,
      photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer2.jpg',
    },
    {
      id: 55,
      name: 'Марина',
      surname: 'Кричич',
      patronymic: 'Михайловна',
      birthday: '1954-12-30T00:00:00',
      rating: 5.0,
      avatar: null,
      addressID: 1,
      emailID: 0,
      photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer1.jpg'
    },
  ];

  beforeEach(() => {
    helperServiceStub = {
      getAllHelpers(paramObj: object = {}) {
        return of(mockHelpers);
      }
    };

    TestBed.configureTestingModule({
      declarations: [HelpersListComponent],
      providers: [{ provide: AdminUserService, useValue: helperServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HelpersListComponent);
    component = fixture.componentInstance;
    helperService = fixture.debugElement.injector.get(AdminUserService);
  });

  it('Expect to receive list of helpers',  (done: DoneFn) => {
    spyOn(helperService, 'getAllHelpers').and.returnValue(of(mockHelpers));
    component.ngOnInit();
    component.helpers$.subscribe((helpers: Helper[]) => {
      expect(helpers).toEqual(mockHelpers);
      done();
    });
  });

  it('Expect to receive helper Id',  (done: DoneFn) => {
    expect(component.trackByHelpers(1, mockHelpers[1])).toEqual(55);
    done();
  });

  it('Expect to check params in onSearch method',  (done: DoneFn) => {
    spyOn(helperService, 'getAllHelpers').and.returnValue(of(mockHelpers));
    const searchValue = 'Stive';
    component.onSearch(searchValue);
    expect(helperService.getAllHelpers).toHaveBeenCalledWith({ name: 'Stive' });
    done();
  });

});
