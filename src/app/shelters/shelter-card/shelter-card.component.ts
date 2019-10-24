import { Component, Input } from '@angular/core';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-shelter-card',
  templateUrl: './shelter-card.component.html',
  styleUrls: ['./shelter-card.component.scss']
})
export class ShelterCardComponent {
  selectedId: number;

  @Input() shelter: Shelter;

  selectCard(shelter) {
    this.selectedId = shelter.id
    console.log(shelter.id, this.selectedId)
  }
}
