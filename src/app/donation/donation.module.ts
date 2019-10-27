import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule, MatDialogModule, MatTabsModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DonationComponent } from './donation.component';
import { NeedsComponent } from './needs/needs-list/needs.component';
import { NeedsItemComponent } from './needs/needs-item/needs-item.component';
import { QuestsListComponent } from './quests/quests-list/quests-list.component';
import { QuestsItemComponent } from './quests/quests-item/quests-item.component';

const donationRoutes: Routes = [
  { path: 'donation', component: DonationComponent }
];

@NgModule({
  declarations: [DonationComponent, NeedsComponent, NeedsItemComponent, QuestsListComponent, QuestsItemComponent],
  imports: [
    RouterModule.forChild(donationRoutes),
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})

export class DonationModule { }
