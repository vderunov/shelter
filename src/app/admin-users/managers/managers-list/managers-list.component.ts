import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../models/manager.interface';
import { ManagersService } from '../services/manager.service';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})

export class ManagersListComponent implements OnInit {
  public managers$: Observable<Manager[]>;

  constructor(private managerService: ManagersService) { }

  ngOnInit(): void {
    this.managers$ = this.managerService.getAllManagers();
  }

  public trackByManagers(index: number, user: Manager): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.managers$ = this.managerService.getAllManagers({ name: searchValue });
  }
}
