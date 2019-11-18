import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthStateService } from './services/state/auth-state.service';
import { NotifierService } from './services/notifier/notifier.service';

@Injectable({providedIn: 'root'})
export class GuardService implements CanActivate {
  constructor(
    private authStateService: AuthStateService,
    private router: Router,
    private location: Location,
    private notifierService: NotifierService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authStateService.checkRoles(route.data.allowedRoles)) {
      return true;
    } else {
      this.notifierService.showNotice('You don\'t have permissions to view this page.', 'warning');
      if (this.authStateService.isLogged()) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}
