import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NeedService } from '../services/need.service';
import { ActivatedRoute } from '@angular/router';
import { Need } from '../models/need.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-needs-item-details',
  templateUrl: './needs-item-details.component.html',
  styleUrls: ['./needs-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsItemDetailsComponent implements OnInit {
  public need$: Observable<Need>;
  private id: string;

  constructor(private needService: NeedService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.need$ = this.needService.getDetails(this.id);
  }

}
