import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveLot } from './models/active-lot.model';
import { AuctionService } from './services/auction.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionComponent implements OnInit {
  public permissions = Permissions;
  public lots$: Observable<ActiveLot[]>;

  constructor(
    private auctionService: AuctionService,
    private router: Router) { }

  public ngOnInit() {
    this.lots$ = this.auctionService.getActiveLots();
  }

  public trackById(index: number, item: ActiveLot) {
    return item.auctionLotItemID;
  }

  public goToCreateLotPage(): void {
    this.router.navigate(['/auction/create-lot']);
  }
}
