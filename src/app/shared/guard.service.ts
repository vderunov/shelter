import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthStateService } from './services/state/auth-state.service';
import { NotifierService } from './services/notifier/notifier.service';

@Injectable({providedIn: 'root'})
export class GuardService implements CanActivate {
  constructor(
    private authStateService: AuthStateService,
    private router: Router,
    private notifierService: NotifierService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentRoles: string | string[] = this.authStateService.getStateProperty('roles');
    if (currentRoles && route.data.allowedRoles.includes(currentRoles[0])) {
      return true;
    } else {
      this.notifierService.showNotice('You can\'t use this path directly!', 'warning');
      if (this.authStateService.isLogged()) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
