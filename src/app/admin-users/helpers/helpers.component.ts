import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../admin-users.models';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export enum RoleHelper {
  volonteer = '0',
  charityMaker = '1'
}
@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss', ]
})


export class HelpersComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  user: User[];
  helperId;
  public visibleFields = false;
  public buttonName: any = ' visibleFields';
  userForm = new FormGroup({
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    roles: new FormControl(''),
  });
  constructor(private userService: UsersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.helperId = this.route.snapshot.params.id;
    this.userService
      .getUserById(this.helperId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.user = res;
        return this.user;
      });

  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  changeInfo() {
    this.visibleFields = !this.visibleFields;
  }

  editInfo() {
    this.userService
      .updateUser(this.userForm.value, this.helperId)
      .subscribe();
  }
  deleteUser() {
    this.userService
      .deleteUser(this.helperId)
      .subscribe();
  }
}
