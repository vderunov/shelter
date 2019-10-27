import { Component, Input } from '@angular/core';
import { Need } from '../models/need.interface';

@Component({
  selector: 'app-need-card',
  templateUrl: './need-card.component.html',
  styleUrls: ['./need-card.component.scss']
})
export class NeedCardComponent {
  @Input() need: Need;
}
