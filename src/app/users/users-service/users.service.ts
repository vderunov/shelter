import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { Config } from 'src/app/shared/services/config/config.interface';
import { UserRegistrationModel } from './../models/user-registration.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) { }

  public addUser(newUser: UserRegistrationModel): Observable<UserRegistrationModel> {
    console.log('User has been added', newUser); // REMOVE ME!

    return this.configService.getConfig().pipe(
      concatMap((config: Config) => {
        return this.http.post<UserRegistrationModel>(config.userRegistrationApi, newUser);
      }
      )
    );
  }
}
