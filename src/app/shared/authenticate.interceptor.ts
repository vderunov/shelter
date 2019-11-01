import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { StateService } from './services/state/state.service';
import { AuthenticationService } from './services/user/authentication.service';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private stateService: StateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<void>> {
    return this.stateService.getState().pipe(
      concatMap(token => {
        if (token) {
          req = req.clone({
            headers: req.headers.set('Authorization', token)
          });
        }
        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.authenticationService.cleanAuthenticatedState();
              // notification component which will notify the user about error
            }
            return throwError(error);
          })
        );
      })
    );
  }
}
