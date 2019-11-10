import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { AuthStateService } from './services/state/auth-state.service';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {
  constructor(private authStateService: AuthStateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<void>> {
    return this.authStateService.getState().pipe(
      concatMap(tokenObj => {
        if (tokenObj) {
          req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${tokenObj.token}`)
          });
        }
        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.authStateService.cleanAuthenticatedState();
              // notification component which will notify the user about error
            }
            return throwError(error);
          })
        );
      })
    );
  }
}
