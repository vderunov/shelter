import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../manager.model';
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
  constructor(private managerService: ManagersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.managerId = this.route.snapshot.params.id;
    this.managerService
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
  public changeInfoManager() {
    this.visibleFields = !this.visibleFields;
  }

  public editInfoManager() {
    this.managerService
      .updateManager(this.managerForm.value, this.managerId)
      .subscribe();
  }
  public deleteManager() {
    this.managerService
      .deleteManager(this.managerId)
      .subscribe();
  }
  public trackByUser(index: number, manager: Manager): string {
    return manager.id;
  }
}

