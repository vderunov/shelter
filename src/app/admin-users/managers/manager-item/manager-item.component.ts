import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../models/manager.model';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.scss']
})
export class ManagerItemComponent implements OnInit {
  public managerId: number;
  @Input() manager: Manager;
  constructor() { }
  ngOnInit() {
  }

  public selecManager(manager) {
    this.managerId = manager.id;
  }

}
