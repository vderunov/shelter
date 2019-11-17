import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/services/user/authentication.service';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { UserRegistrationModel } from './../models/user-registration.model';
import { LoginModel } from 'src/app/login/login.model';
import { VolunteerRegistrationModel } from '../models/volunteer-registration.model.';
import { ManagerRegistrationModel } from './../models/manager-registration.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authenticationService: AuthenticationService,
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public addVolunteer(registerForm): Observable<VolunteerRegistrationModel> {
    const newUser: UserRegistrationModel = {
      email: registerForm.email,
      password: registerForm.password,
      passwordConfirm: registerForm.confirmPassword,
      phone: registerForm.phone,
      yourDropdownSelectedValue: 'Volunteer'
    };

    const loginObj: LoginModel = {
      email: registerForm.email,
      password: registerForm.password
    };

    const newVolunteer: VolunteerRegistrationModel = {
      name: registerForm.name,
      surname: registerForm.surname,
      patronymic: registerForm.patronymic,
      rating: 10
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post<UserRegistrationModel>(config. , newUser, this.httpOptions).pipe(
          concatMap(() => this.authenticationService.login(loginObj).pipe(
            concatMap(() => this.http.post<VolunteerRegistrationModel>(config.helpersApi, newVolunteer, this.httpOptions))
          ))
        );
      })
    );
  }

  public addManager(registerForm): Observable<ManagerRegistrationModel> {
    const newUser: UserRegistrationModel = {
      email: registerForm.email,
      password: registerForm.password,
      passwordConfirm: registerForm.confirmPassword,
      phone: registerForm.phone,
      yourDropdownSelectedValue: 'Representative'
    };

    const loginObj: LoginModel = {
      email: registerForm.email,
      password: registerForm.password
    };

    const newManager: ManagerRegistrationModel = {
      name: registerForm.name,
      surname: registerForm.surname,
      patronymic: registerForm.patronymic,
      rating: 10,
      birthday: '01/01/1990',
      childrenHouseId: 1
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post<UserRegistrationModel>(config.userRegistrationApi, newUser, this.httpOptions).pipe(
          concatMap(() => this.authenticationService.login(loginObj).pipe(
            concatMap(() => this.http.post<ManagerRegistrationModel>(config.managersApi, newManager, this.httpOptions))
          ))
        );
      })
    );
  }
}
