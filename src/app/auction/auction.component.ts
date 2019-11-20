import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveLot } from './models/active-lot.model';
import { AuctionService } from './services/auction.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionComponent implements OnInit, OnDestroy {
  public permissions = Permissions;
  public lots$: Observable<ActiveLot[]>;
  public isSpinner = true;

  constructor(
    private auctionService: AuctionService,
    private router: Router) { }

  public ngOnInit() {
    this.lots$ = this.auctionService.getActiveLots();
    this.lots$.pipe(untilDestroyed(this)).subscribe((lots: ActiveLot[]) => {
      this.isSpinner = false;
    });
  }

  public trackById(index: number, item: ActiveLot) {
    return item.auctionLotItemID;
  }
  public ngOnDestroy(): void { }

  public goToCreateLotPage(): void {
    this.router.navigate(['/auction/create-lot']);
  }
}
