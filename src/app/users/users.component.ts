import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  managers;
  constructor(private userService: UsersService) { }

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
