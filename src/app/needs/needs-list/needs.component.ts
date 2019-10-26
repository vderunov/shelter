import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Need } from '../models/need.interface';
import { NeedService} from '../services/need.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsComponent implements OnInit {
  needs: Observable<Need[]>;

  constructor(private needService: NeedService) { }

  ngOnInit() {
    this.needs = this.needService.getNeeds();
  }

  needTrackBy(index: number, need: Need): number {
    return need.donationItemID;
  }
}
