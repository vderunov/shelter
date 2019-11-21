import { UserRegistrationService } from './user-registration.service';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';
import { UserRegistrationModel } from './../models/user-registration.model';
import { of } from 'rxjs';

describe('UserRegistrationService', () => {
  let service: UserRegistrationService;
  let httpClientSpy: { post: jasmine.Spy };
  let configServiceSpy: { getConfig: jasmine.Spy };
  let formData;
  let formValue;
  let configUrl: {
    userRegistrationApi: string;
    helpersApi: string;
    managersApi: string;
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('http', ['post']);
    configServiceSpy = jasmine.createSpyObj('configService', ['getConfig']);
    configUrl = {
      userRegistrationApi: 'https://familynetserver.azurewebsites.net/api/v2/registration',
      helpersApi: 'https://familynetserver.azurewebsites.net/api/v2/volunteers/',
      managersApi: 'https://familynetserver.azurewebsites.net/api/v2/representatives/'
    };
    service = new UserRegistrationService(
      httpClientSpy as any,
      configServiceSpy as any
    );

    httpClientSpy.post.and.returnValue(of({token: 'someData'}));
    configServiceSpy.getConfig.and.returnValue(of(configUrl));
  });

  it('service userRegistrationService should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method addUser', () => {
    it('service should send data for login by post request', (done: DoneFn) => {
      formData = {
        phone: '(050) 123-4567',
        email: 'moreCofee@gmail.com',
        password: '678imLosingWeight',
        passwordConfirm: '678imLosingWeight',
        yourDropdownSelectedValue: 'Volunteer'
      };
      formValue = {
        phone: '(050) 123-4567',
        email: 'moreCofee@gmail.com',
        password: '678imLosingWeight',
        confirmPassword: '678imLosingWeight',
        yourDropdownSelectedValue: 'Volunteer'
      };

      service.addUser(formValue, 'Volunteer').subscribe(() => {
        expect(httpClientSpy.post).toHaveBeenCalledWith(configUrl.userRegistrationApi, formData, (service as any).httpOptions);
        done();
      });
    });
  });

  describe('Method addUserInfo', () => {
    it('service should send data for adding user info by post request', (done: DoneFn) => {
      formData = {
        name: 'TheyKeepMe',
        patronymic: 'InBasementAndForce',
        surname: 'ToWriteThisTests',
        birthday: '0001-01-01T00:00:00',
        childrenHouseId: undefined,
        rating: 10
      };
      const role = 'Volunteer';
      service.addUserInfo(formData, role).subscribe(() => {
        expect(httpClientSpy.post).toHaveBeenCalledWith(configUrl[(service as any).apiByRole[role]],
          formData, (service as any).httpOptions);
        done();
      });
    });
  });
});
