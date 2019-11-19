import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { UserRegistrationModel } from './../models/user-registration.model';
import { UserInfoModel } from '../models/user-info.model';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private apiByRole = {
    [Roles.Volunteer]: 'helpersApi',
    [Roles.Representative]: 'managersApi'
  };

  public addUser(userRegForm, role): Observable<UserRegistrationModel> {
    const newUser: UserRegistrationModel = {
      phone: userRegForm.phone,
      email: userRegForm.email,
      password: userRegForm.password,
      passwordConfirm: userRegForm.confirmPassword,
      yourDropdownSelectedValue: role
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.post<UserRegistrationModel>(config.userRegistrationApi, newUser, this.httpOptions))
    );
  }

  public addUserInfo(userInfoForm, role): Observable<UserInfoModel> {
    const userInfo: UserInfoModel = {
      name: userInfoForm.name,
      surname: userInfoForm.surname,
      patronymic: userInfoForm.patronymic,
      birthday: userInfoForm.birthday,
      childrenHouseId: userInfoForm.shelterId,
      rating: 10
    };

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => this.http.post<UserInfoModel>(config[this.apiByRole[role]], userInfo, this.httpOptions))
    );
  }
}
