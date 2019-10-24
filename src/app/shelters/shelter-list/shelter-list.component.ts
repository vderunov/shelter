import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SheltersService } from '../shelters-service/shelters.service';
import { Shelter } from '../models/shelter.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelterListComponent implements OnInit {
  shelters: Observable<Shelter[]>;

  constructor(private sheltersService: SheltersService) { }

  ngOnInit(): void {
    this.shelters = this.sheltersService.getShelters();
  }

  shelterTrackBy(index: number, shelter: Shelter): number {
    return shelter.id;
  }
}
