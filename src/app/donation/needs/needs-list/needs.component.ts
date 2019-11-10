import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Need } from '../models/need.interface';
import { NeedService } from '../services/need.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsComponent implements OnInit {
  public needs$: Observable<Need[]>;

  constructor(private needService: NeedService) { }

  public ngOnInit() {
    this.needs$ = this.needService.getNeeds();
  }

  public trackById(index: number, item: Need) {
    return item.donationItemID;
  }

  public onSearch(searchValue: string): void {
    this.needs$ = this.needService.getNeeds({ forSearch: searchValue });
  }
}
