import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../admin-users.models';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  public visibleFields = false;
  public buttonName: any = ' visibleFields';
  manager: Manager[];
  managerId;
  managerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    birthday: new FormControl(''),
    childrenHouseID: new FormControl(''),
    patronymic: new FormControl(''),
    photoPath: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor(private userService: UsersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.managerId = this.route.snapshot.params.id;
    this.userService
      .getManagerById(this.managerId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        this.manager = res;
        return this.manager;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  changeInfoManager() {
    this.visibleFields = !this.visibleFields;
  }

  editInfoManager() {
    this.userService
      .updateManager(this.managerForm.value, this.managerId)
      .subscribe();
  }
  deleteManager() {
    this.userService
      .deleteManager(this.managerId)
      .subscribe();
  }
}

