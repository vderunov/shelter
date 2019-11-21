import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Need } from '../models/need.interface';

@Component({
  selector: 'app-needs-item',
  templateUrl: './needs-item.component.html',
  styleUrls: ['./needs-item.component.scss']
})
export class NeedsItemComponent {
  @Input() need: Need;
  @Output() donate: EventEmitter<any> = new EventEmitter<Need>();

  public onDonate() {
    this.donate.emit(this.need);
  }
}
