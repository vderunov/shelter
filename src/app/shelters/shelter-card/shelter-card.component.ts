import { Component, Input } from '@angular/core';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-shelter-card',
  templateUrl: './shelter-card.component.html',
  styleUrls: ['./shelter-card.component.scss']
})
export class ShelterCardComponent {
  private selectedId: number;

  @Input() shelter: Shelter;

  private selectCard(shelter) {
    this.selectedId = shelter.id
  }
}
