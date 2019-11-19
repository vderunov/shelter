import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { LoginModel } from 'src/app/login/login.model';
import { ConfigService } from '../config/config.service';
import { AuthStateService } from '../state/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authStateService: AuthStateService
  ) { }

  public login(loginData: LoginModel): Observable<any> {
    return this.configService.getConfig().pipe(
      concatMap((config) => this.http.post<LoginModel>(config.loginApi, loginData)),
      tap((stateObj) => {
        if (stateObj && stateObj.token) {
          this.authStateService.setState(stateObj);
        }
      })
    );
  }
}
