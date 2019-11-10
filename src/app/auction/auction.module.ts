import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuctionComponent } from './auction.component';
import { AuctionLotComponent } from './auction-lot/auction-lot.component';
import { MatListModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

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
    MatButtonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuctionModule { }
