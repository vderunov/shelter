import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheltersService } from '../shelters-service/shelters.service';
import { Observable, Subscription } from 'rxjs';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-shelter-card-details',
  templateUrl: './shelter-card-details.component.html',
  styleUrls: ['./shelter-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelterCardDetailsComponent implements OnInit {
  private id: string;
  public shelter$: Observable<Shelter>;

  constructor(
    private sheltersService: SheltersService,
    private activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.shelter$ = this.sheltersService.getDetails(this.id);
  }
}
