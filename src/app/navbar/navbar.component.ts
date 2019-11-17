import { Component } from '@angular/core';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public permissions = Permissions;
  constructor() { }
}
