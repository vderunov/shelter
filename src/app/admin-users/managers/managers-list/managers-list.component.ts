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

  ngOnInit(): void {
    this.managers$ = this.managerService.getAllManagers();
  }

  public trackByManagers(index: number, user: Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.managers$ = this.managerService.getAllManagers({ name: searchValue });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ManagerRegistrationComponent, {
      width: '600px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-manager-registration-component',
  templateUrl: 'manager-registration.component.html',
})
export class ManagerRegistrationComponent {

  constructor(
    public dialogRef: MatDialogRef<ManagerRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
