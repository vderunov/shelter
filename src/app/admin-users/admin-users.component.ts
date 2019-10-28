import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelpersService } from './helper.service';
import { ManagersService } from './managers.service';
import { Observable } from 'rxjs';
import { Helper } from './helper.models';
import { Manager } from './manager.model';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  public users$: Observable<Helper[]>;
  public managers$: Observable<Manager[]>;
  constructor(private helperService: HelpersService, private managerService: ManagersService) { }
  ngOnInit(): void {
    this.users$ = this.helperService.getUserInfo();
    this.managers$ = this.managerService.getManagers();
  }
  public usertrackBy(index: number, user: Helper): string {
    return user.id;
  }
  public managertrackBy(index: number, manager: Manager): string {
    return manager.id;
  }
}
