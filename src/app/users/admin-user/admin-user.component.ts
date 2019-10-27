import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss', '../users.component.scss']
})
export class AdminUserComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }
  user: User[];
  id;
  userForm = new FormGroup({
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    roles: new FormControl(''),
  });
  public show = false;
  public buttonName: any = 'Show';
  public contenteditable = false;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService
      .getUserById(this.id)
      .subscribe((res) => {
        this.user = res;
        return this.user;
      });
    return this.id;
  }
  changeInfo() {
    this.show = !this.show;
    this.contenteditable = !this.contenteditable;
  }

  editInfo() {
    this.userService
      .updateUser(this.userForm.value, this.id)
      .subscribe((res) => {
        return res;
      });
  }
  deleteUser() {
    this.userService
      .deleteUser(this.id)
      .subscribe((res) => {
        return res;
      });
  }
}
