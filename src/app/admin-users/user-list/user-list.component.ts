import { Component, OnInit, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Helper } from '../models/helper.model';
import { Manager } from '../models/manager.model';
import { AdminUserService } from '../services/admin-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  @Input() userRole: string;
  public users$: Observable<Helper[] | Manager[]>;
  public roleRedirect = {
    helpers: {
      getAll: 'getAllHelpers',
      role: 'Volunteer'
    },
    managers: {
      getAll: 'getAllManagers',
      role: 'Representative'
    }
  };



  constructor(
    private adminUserService: AdminUserService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    const methodName = this.roleRedirect[this.userRole].getAll;
    this.users$ = this.adminUserService[methodName]();
    this.adminUserService[methodName]().subscribe(
    );
  }

  public trackByUsers(index: number, user: Helper | Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    const methodName = this.roleRedirect[this.userRole].getAll;
    this.users$ = this.adminUserService[methodName]({ name: searchValue });
  }

  AddNewUser(userRole) {
    const role = this.roleRedirect[this.userRole].role;
    console.log(role);
    // this.router.navigate(['/user-registration', { role: 'Volunteer' }]);
  }

}
