import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Helper } from '../models/helper.model';
import { Manager } from '../models/manager.model';
import { AdminUserService } from '../services/admin-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  @Input() userRole: string;
  public users$: Observable<Helper[] | Manager[]>;

  constructor(
    private adminUserService: AdminUserService
  ) { }

  public ngOnInit(): void {
    this.users$ = this.adminUserService.getAllUsers(this.userRole);
  }

  public trackByUsers(index: number, user: Helper | Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.users$ = this.adminUserService.getAllUsers(this.userRole, { name: searchValue });
  }

  public addUser() {
    this.adminUserService.navigateRegistrPage(this.userRole);
  }

}
