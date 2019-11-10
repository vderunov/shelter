import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
import { AuthStateService } from './services/state/auth-state.service';
import { NotifierService } from './services/notifier/notifier.service';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {
  constructor(private authStateService: AuthStateService, private notifierService: NotifierService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<void>> {
    return this.authStateService.getState().pipe(
      concatMap(token => {
        if (token) {
          req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
          });
        }
        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.authStateService.cleanAuthenticatedState();
              this.notifierService.showNotice(error.message, 'error');
            }
            return throwError(error);
          })
        );
      })
    );
  }
}
