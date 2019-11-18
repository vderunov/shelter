import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Helper } from '../../models/helper.model';
import { AdminUserService } from '../../services/admin-user.service';

@Component({
  selector: 'app-helpers-list',
  templateUrl: './helpers-list.component.html',
  styleUrls: ['./helpers-list.component.scss']
})

export class HelpersListComponent implements OnInit {
  public helpers$: Observable<Helper[]>;

  constructor(private adminUserService: AdminUserService) { }

  public ngOnInit(): void {
    this.helpers$ = this.adminUserService.getAllHelpers();
  }

  public trackByHelpers(index: number, user: Helper): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.helpers$ = this.adminUserService.getAllHelpers({ name: searchValue });
  }

}
