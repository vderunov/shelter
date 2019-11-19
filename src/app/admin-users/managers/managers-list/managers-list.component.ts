import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../../models/manager.model';
import { AdminUserService } from '../../services/admin-user.service';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})

export class ManagersListComponent implements OnInit {
  public managers$: Observable<Manager[]>;

  constructor(private adminUserService: AdminUserService) { }

  public ngOnInit(): void {
    this.managers$ = this.adminUserService.getAllManagers();
  }

  public trackByManagers(index: number, user: Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.managers$ = this.adminUserService.getAllManagers({ name: searchValue });
  }

}
