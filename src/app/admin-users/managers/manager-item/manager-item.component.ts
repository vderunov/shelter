import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../models/manager.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.scss']
})

export class ManagerItemComponent {
  public managerId: string;
  @Input() manager: Manager;

  constructor(private router: Router) { }

  public selecManager(manager: Manager) {
    this.managerId = manager.id;
    this.router.navigate(['manager/', this.managerId]);
  }

}