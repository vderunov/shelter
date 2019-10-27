import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take, concatMap, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/login/login.interface';
import { NewUser } from 'src/app/registration-user/registration-user.interface';
import { ConfigService } from '../config/config.service';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private configService: ConfigService,
  ) { }

  login(loginData: Login): Observable<any> {
    // [1] added only for testing, delete this block in the future!
    const body: object[] = [{
      id: '8c338aa3-2e1b-4a44-aab0-4c4045d39e91',
      phoneNumber: '8045357385',
      email: loginData['email'].toLowerCase(),
      password: null,
      roles: [
        'Admin'
      ]
    }];
    LocalStorageService.setItem('user', JSON.stringify(body));
    // [1] end.
    return this.configService.configLoaded
      .pipe(
        concatMap(config => this.http.post<any>(config.loginApi, loginData, this.httpOptions)),
        take(1),
        map(tokenObj => {
          this.httpOptions.headers.set('Authorization', tokenObj['token']);
        }),
        catchError(this.handleError)
      );
  }

  addUser(newUser: NewUser) {
    console.log('User has been added', newUser);
  }

  removeUser(id: number) {
    console.log('User has been removed');
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
