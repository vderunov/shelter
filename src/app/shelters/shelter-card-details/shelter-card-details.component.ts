import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheltersService } from '../shelters-service/shelters.service';
import { Observable, Subscription } from 'rxjs';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-shelter-card-details',
  templateUrl: './shelter-card-details.component.html',
  styleUrls: ['./shelter-card-details.component.scss']
})
export class ShelterCardDetailsComponent implements OnInit, OnDestroy {
  private id: string;
  private shelter: Shelter;
  private shelterSubscription: Subscription;

  constructor(
    private sheltersService: SheltersService,
    private activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.shelterSubscription = this.sheltersService.getDetails(`/${this.id}`).subscribe(shelter => this.shelter = shelter);
  }

  public ngOnDestroy() {
    this.shelterSubscription.unsubscribe();
  }
}
