import { Component } from '@angular/core';
import { AuthStateService } from '../../shared/services/state/auth-state.service';
import { AuthenticationService } from '../../shared/services/user/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  constructor(
    private authStateService: AuthStateService,
    private authenticationService: AuthenticationService
  ) { }

}
