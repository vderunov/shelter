import { Component, Input } from '@angular/core';
import { Helper } from '../models/helper.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper-item',
  templateUrl: './helper-item.component.html',
  styleUrls: ['./helper-item.component.scss']
})
export class HelperItemComponent {
  public helperId: string;
  @Input() helper: Helper;
  constructor(private router: Router) { }

  public selectHelper(helper: Helper) {
    this.helperId = helper.id;
    this.router.navigate(['helper/', this.helperId]);
  }
}
