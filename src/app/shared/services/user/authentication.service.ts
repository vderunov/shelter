import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take, concatMap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/login/login.interface';
import { NewUser } from 'src/app/registration-user/registration-user.interface';
import { ConfigService } from '../config/config.service';
import { AuthStateService } from '../state/auth-state.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private configService: ConfigService,
    private authStateService: AuthStateService,
    private cookieService: CookieService,
  ) { }

  public login(loginData: Login): Observable<any> {
    return this.configService.getConfig().pipe(
      concatMap(config => this.http.post<any>(config.loginApi, loginData)),
      take(1),
      map(tokenObj => {
        if (tokenObj.token) {
          this.authStateService.setToken(tokenObj.token);
        }
      }),
      catchError(this.handleError)
    );
  }

  public addUser(newUser: NewUser) {
    console.log('User has been added', newUser);
  }

  public removeUser(id: number) {
    console.log('User has been removed');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
