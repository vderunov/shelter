import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from '../manager.model';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss', '../users.component.scss']
})
export class AdminManagerComponent implements OnInit {

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }
  manager: Manager[];
  id;
  managerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    birthday: new FormControl(''),
    childrenHouseID: new FormControl(''),
    patronymic: new FormControl(''),
    photoPath: new FormControl(''),
    rating: new FormControl(''),

  });
  public show = false;
  public buttonName: any = 'Show';
  public contenteditable = false;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService
      .getManagerById(this.id)
      .subscribe((res) => {
        this.manager = res;
        return this.manager;
      });
    return this.id;
  }
  changeInfoManager() {
    this.show = !this.show;
    this.contenteditable = !this.contenteditable;
  }

  editInfoManager() {
    this.userService
      .updateManager(this.managerForm.value, this.id)
      .subscribe((res) => {
        return res;
      });
  }
  deleteManager() {
    this.userService
      .deleteManager(this.id)
      .subscribe((res) => {
        return res;
      });
  }
}
