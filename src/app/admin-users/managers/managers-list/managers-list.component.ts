import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../models/manager.model';
import { ManagersService } from '../services/manager.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})

export class ManagersListComponent implements OnInit {
  public managers$: Observable<Manager[]>;

  constructor(private managerService: ManagersService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.managers$ = this.managerService.getAllManagers();
  }

  public trackByManagers(index: number, user: Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.managers$ = this.managerService.getAllManagers({ name: searchValue });
  }

}
