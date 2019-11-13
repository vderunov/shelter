import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { UserRegistrationModel } from './../models/user-registration.model';
import { VolunteerRegistrationModel } from '../models/volunteer-registration.model.';
import { LoginModel } from 'src/app/login/login.model';
import { AuthenticationService } from 'src/app/shared/services/user/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authenticationService: AuthenticationService
  ) { }

  public addUser(registerForm): Observable<UserRegistrationModel> {
    const newUser: UserRegistrationModel = {
      'email': registerForm.email,
      'password': registerForm.password,
      'passwordConfirm': registerForm.passwordConfirm,
      'phone': registerForm.phone,
      'yourDropdownSelected': 2
    };

    const newVolunteer: VolunteerRegistrationModel = {
      'name': registerForm.name,
      'surname': registerForm.surname,
      'patronymic': registerForm.patronymic,
      'rating': 1.0
    };

    const loginObj: LoginModel = {
      'email': registerForm.email,
      'password': registerForm.password,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post(config.userRegistrationApi, newUser).pipe(
          concatMap((user) => {
            return this.authenticationService.login(loginObj).pipe(
              concatMap((user) => {
                // newVolunteer.id = user.id;
                return this.http.post<UserRegistrationModel>(config.volunteerRegistrationApi, newVolunteer, httpOptions);
              }
              )
            );
          })
        );
      })
    );
  }
}
