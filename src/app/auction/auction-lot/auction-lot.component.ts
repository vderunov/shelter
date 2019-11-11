import { Component, OnInit, Input } from '@angular/core';
import { ActiveLot } from '../models/active-lot.model';

@Component({
  selector: 'app-auction-lot',
  templateUrl: './auction-lot.component.html',
  styleUrls: ['./auction-lot.component.scss']
})
export class AuctionLotComponent {
  @Input() lot: ActiveLot;
  constructor() { }
}
