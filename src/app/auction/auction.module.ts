import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuctionComponent } from './auction.component';
import { AuctionLotComponent } from './auction-lot/auction-lot.component';
import { MatListModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { PermissionsModule } from '../shared/permissions/permissions.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const auctionRoutes: Routes = [
  { path: 'auction', component: AuctionComponent }
];

@NgModule({
  declarations: [AuctionComponent, AuctionLotComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(auctionRoutes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    PermissionsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuctionModule { }
