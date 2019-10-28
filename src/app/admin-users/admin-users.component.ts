import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelpersService } from './helper.service';
import {ManagersService} from './managers.service';
import { Observable } from 'rxjs';
import { User, Manager } from './admin-users.models';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})


export class AdminUsersComponent implements OnInit {
  public users$: Observable<User[]>;
  public managers$: Observable<Manager[]>;
  help: User[];


  constructor(private helperService: HelpersService, private managerService: ManagersService) { }
  ngOnInit(): void {
    this.users$ = this.helperService.getUserInfo();
    this.managers$ =  this.managerService.getManagers();
  }
  usertrackBy(index: number, user: User): string {
    return user.id;
  }
 managertrackBy(index: number, manager: Manager): string {
    return manager.id;
  }
}
