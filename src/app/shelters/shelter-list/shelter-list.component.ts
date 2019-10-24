import { Component } from '@angular/core';
import { SheltersService } from '../shelters-service/shelters.service';
import { Shelter } from '../models/shelter.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.scss']
})
export class ShelterListComponent {
  shelters: Shelter[];

  constructor(private sheltersService: SheltersService) { 
    this.sheltersService.getShelters().pipe(take(1)).subscribe(shelters => this.shelters = shelters);
  }
}
