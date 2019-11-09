import { Component, Input } from '@angular/core';
import { Manager } from '../models/manager.interface';

@Component({
  selector: 'app-manager-item',
  templateUrl: './manager-item.component.html',
  styleUrls: ['./manager-item.component.scss']
})

export class ManagerItemComponent {
  @Input() manager: Manager;
}
