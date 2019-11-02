import { Component, OnInit, Input } from '@angular/core';
import { Helper } from '../models/helper.model';

@Component({
  selector: 'app-helper-item',
  templateUrl: './helper-item.component.html',
  styleUrls: ['./helper-item.component.scss']
})
export class HelperItemComponent implements OnInit {
  public helperId: number;
  @Input() helper: Helper;
  constructor() { }
  ngOnInit() {
  }

  public selecHelper(helper: { id: number; }) {
    this.helperId = helper.id;
  }
}
