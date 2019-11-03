import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpersListComponent } from './helpers/helpers-list/helpers-list.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        path: 'users/managers',
        component: ManagersListComponent,
        data: {
          label: 'Managers'
        }
      },
      {
        path: 'users/helpers',
        component: HelpersListComponent,
        data: {
          label: 'Helpers'
        }
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
