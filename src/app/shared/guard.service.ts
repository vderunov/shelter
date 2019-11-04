import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthStateService } from './services/state/auth-state.service';

@Injectable({providedIn: 'root'})
export class GuardService implements CanActivate {
  constructor(private authStateService: AuthStateService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authStateService.getStateValue()) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: {
        auth: false
      }
    });
  }
}
