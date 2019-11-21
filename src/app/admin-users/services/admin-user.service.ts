import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Helper } from '../models/helper.model';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { Manager } from '../models/manager.model';
import { EditUserModel } from '../models/edit-user.model';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

@Injectable({ providedIn: 'root' })

export class AdminUserService {

 private roleRedirect = {
    helpers: {
      addUserRole: Roles.Volunteer,
      apiUser: 'helpersApi',
      apiForUpdate: 'helpersImageApi'
    },
    managers: {
      addUserRole: Roles.Representative,
      apiUser: 'managersApi',
      apiForUpdate: 'managersImageApi'
    }
  };

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private router: Router,
    private authStateService: AuthStateService
  ) { }

  public getAllUsers(userRole: string, paramObj: object = {}) {
    const apiName = this.roleRedirect[userRole].apiUser;
    let params = new HttpParams();
    Object.keys(paramObj)
      .forEach((key: string) => params = params.set(key, paramObj[key]));
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Manager[] | Helper[]>(config[apiName], { params })
      ),
    );
  }

  public getUserById(userRole: string, id: string): Observable<Helper | Manager> {
    const apiName = this.roleRedirect[userRole].apiUser;
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.get<Helper | Manager>(`${config[apiName]}/${id}`)
      )
    );
  }

  public updateUserById(userRole: string, id: string, data: Helper | Manager):
    Observable<Helper | Manager> {
    const apiUpdate = this.roleRedirect[userRole].apiForUpdate;
    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.put<Manager | Helper>(`${config[apiUpdate]}${id}`, this.createFormData<Manager | Helper>(data));
      })
    );
  }

  public deleteUserById(userRole: string, id: string) {
    const apiName = this.roleRedirect[userRole].apiUser;
    return this.configService.getConfig().pipe(
      concatMap((config: Config) =>
        this.http.delete(`${config[apiName]}/${id}`)
      )
    );
  }

  public navigateToRegistration(userRole: string) {
    const currRole = this.roleRedirect[userRole].addUserRole;
    this.router.navigate(['/user-registration', { role: currRole }]);
  }

  private createFormData<T>(info: T): FormData {
    const formData = new FormData();
    Object.entries(info).forEach(([key, value]: [string, Blob]) =>
      value instanceof File ?
        formData.append(key, value, value.name) :
        formData.append(key, value));
    return formData;
  }
}
