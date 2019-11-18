import { Component, Input } from '@angular/core';
import { Need } from '../models/need.interface';

@Component({
  selector: 'app-needs-item',
  templateUrl: './needs-item.component.html',
  styleUrls: ['./needs-item.component.scss']
})
export class NeedsItemComponent {
  @Input() need: Need;

  public onDonate() {
    // changing status by put method will be here
  }
}
