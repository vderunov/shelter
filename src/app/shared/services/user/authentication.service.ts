import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    private authStateService: AuthStateService,
    private router: Router
  ) { }

  public login(loginData): Observable<any> {
    return this.configService.getConfig().pipe(
      concatMap((config) => this.http.post<LoginModel>(config.loginApi, loginData)),
      tap((stateObj) => {
        if (stateObj && stateObj.token) {
          this.authStateService.setState(stateObj);
          this.router.navigate(['']);
        }
      })
    );
  }

  public logout(): void {
    this.authStateService.cleanAuthenticatedState();
    this.router.navigate(['']);
  }
}
