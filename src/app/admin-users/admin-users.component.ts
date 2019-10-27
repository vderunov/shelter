import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(private userService: UsersService) { }
  users;
  managers;
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((res) => {
      this.users = res;
      return this.users;
    });

    this.userService.getManagers().subscribe((res) => {
      this.managers = res;
      return this.managers;
    });

  }

}
