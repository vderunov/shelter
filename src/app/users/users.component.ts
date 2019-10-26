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
      this.userService.getUserInfo(this.userService.nextPage).subscribe((resp) => {
        this.users = resp.body;
        return this.users;
      });
    });

    this.userService.getManagers().subscribe((res) => {
      this.userService.getManagers(this.userService.nextPage).subscribe((resp) => {
        this.managers = resp;
        return this.managers;
      });
    });

  }

}
