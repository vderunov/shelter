import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { ActiveLot } from './models/active-lot.model';
import { AuctionService } from './services/auction.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { takeUntil } from 'rxjs/operators';

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
  private destroy$ = new Subject();

  constructor(private auctionService: AuctionService) { }

  public ngOnInit() {
    this.lots$ = this.auctionService.getActiveLots();
    this.lots$.pipe(takeUntil(this.destroy$)).subscribe((lots: ActiveLot[]) => {
      this.isSpinner = false;
    });
  }

  public trackById(index: number, item: ActiveLot) {
    return item.auctionLotItemID;
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
