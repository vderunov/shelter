import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuctionService } from '../services/auction.service';

@Component({
  selector: 'app-lot-creator',
  templateUrl: './lot-creator.component.html',
  styleUrls: ['./lot-creator.component.scss']
})
export class LotCreatorComponent implements OnInit {
  newLotForm: FormGroup;
  public items$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder,
    private auctionService: AuctionService) { }

  public ngOnInit() {
    this.newLotForm = this.formBuilder.group({
      items: ['']
    });

    this.items$ = this.auctionService.getItems();
  }
}
