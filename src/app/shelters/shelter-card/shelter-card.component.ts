import { Component, Input } from '@angular/core';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-shelter-card',
  templateUrl: './shelter-card.component.html',
  styleUrls: ['./shelter-card.component.scss']
})
export class ShelterCardComponent {
  public selectedId: number;

  @Input() shelter: Shelter;

  public selectCard(shelter) {
    this.selectedId = shelter.id;
  }
}
