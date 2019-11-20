import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SheltersService } from '../shelters-service/shelters.service';
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
