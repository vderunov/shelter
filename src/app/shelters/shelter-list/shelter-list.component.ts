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
  public shelters$: Observable<Shelter[]>;

  constructor(private sheltersService: SheltersService) {}

  public ngOnInit(): void {
    this.shelters$ = this.sheltersService.getShelters();
  }

  public shelterTrackBy(index: number, shelter: Shelter): number {
    return shelter.id;
  }

  public onSearch(searchValue: string): void {
    this.shelters$ = this.sheltersService.getShelters({name: searchValue});
  }
}
