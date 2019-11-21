import { Component, Input, OnInit } from '@angular/core';
import { Helper } from '../models/helper.model';
import { Manager } from '../models/manager.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  @Input() user: Helper | Manager;
  @Input() userRole: string;

  public userPath: string;
  public ngOnInit(): void {
    this.userPath = `/${this.userRole}`;
  }
}
