import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {

  constructor(
    private router: Router
  ) {}
  setTab(tab: string) {
    this.router.navigate([`${tab}`]);
  }

}
