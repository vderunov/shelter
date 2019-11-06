import { Component, Input } from '@angular/core';
import { Helper } from '../models/helper.model';

@Component({
  selector: 'app-helper-item',
  templateUrl: './helper-item.component.html',
  styleUrls: ['./helper-item.component.scss']
})
export class HelperItemComponent {

  @Input() helper: Helper;
}
