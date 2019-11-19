import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Shelter } from '../models/shelter.interface';
import { SheltersService } from '../shelters-service/shelters.service';
import { MapMarker } from 'src/app/map/map-marker.model';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shelters-map',
  templateUrl: './shelters-map.component.html',
  styleUrls: ['./shelters-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheltersMapComponent implements OnInit {
  public markers$;

  constructor(
    private sheltersService: SheltersService,
    private router: Router) { }

  ngOnInit() {
    this.markers$ = this.sheltersService.getLocationEveryShelters();
  }

  gotoShelter(id) {
    this.router.navigate(['/shelters', id]);
  }
}
