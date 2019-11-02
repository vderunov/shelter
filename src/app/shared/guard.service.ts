import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './services/user/authentication.service';

@Injectable({providedIn: 'root'})
export class GuardService implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          auth: false
        }
      });
    }
  }
}
