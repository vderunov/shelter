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
import { LotCreatorComponent } from './lot-creator/lot-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


const auctionRoutes: Routes = [
  { path: 'auction', component: AuctionComponent },
  { path: 'auction/create-lot', component: LotCreatorComponent }
];

@NgModule({
  declarations: [AuctionComponent, AuctionLotComponent, LotCreatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(auctionRoutes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    PermissionsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuctionModule { }
