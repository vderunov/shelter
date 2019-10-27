import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Need } from '../models/need.interface';
import { NeedService } from '../services/need.service';

@Component({
  selector: 'app-need-card-details',
  templateUrl: './need-card-details.component.html',
  styleUrls: ['./need-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedCardDetailsComponent implements OnInit {
  public id: string;
  public need$: Observable<Need>;

  constructor(
    private needService: NeedService,
    private activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.need$ = this.needService.getDetails(this.id)
    console.log(this.need$);
  }
}
