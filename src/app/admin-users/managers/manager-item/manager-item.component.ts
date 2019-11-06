import { Component, OnInit, Input } from '@angular/core';
import { Manager } from '../models/manager.model';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.scss']
})

export class ManagerItemComponent {
  @Input() manager: Manager;
}
