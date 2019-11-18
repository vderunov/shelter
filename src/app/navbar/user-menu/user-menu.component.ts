import { Component } from '@angular/core';
import { AuthStateService } from '../../shared/services/state/auth-state.service';
import { AuthenticationService } from '../../shared/services/user/authentication.service';
import { Permissions } from '../../shared/permissions/models/permissions.enum';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  public permissions = Permissions;

  constructor(
    private authStateService: AuthStateService,
    private authenticationService: AuthenticationService
  ) { }

  public getEmail(): string | string[] {
    return this.authStateService.getStateProperty('email');
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
