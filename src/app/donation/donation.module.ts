import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatCardModule, MatButtonModule, MatGridListModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DonationComponent } from './donation.component';
import { NeedsComponent } from './needs/needs-list/needs.component';
import { NeedsItemComponent } from './needs/needs-item/needs-item.component';
import { QuestsListComponent } from './quests/quests-list/quests-list.component';
import { QuestsItemComponent } from './quests/quests-item/quests-item.component';
import { SearchModule } from '../search/search.module';
import { NeedsItemDetailsComponent } from './needs/needs-item-details/needs-item-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestsItemDetailsComponent } from './quests/quests-item-details/quests-item-details.component';
import { PermissionsModule } from '../shared/permissions/permissions.module';

const donationRoutes: Routes = [
  { path: 'donation', component: DonationComponent },
  { path: 'needs/:id', component: NeedsItemDetailsComponent },
  { path: 'quests/:id', component: QuestsItemDetailsComponent },
];

@NgModule({
  declarations: [
    DonationComponent,
    NeedsComponent,
    NeedsItemComponent,
    QuestsListComponent,
    QuestsItemComponent,
    NeedsItemDetailsComponent,
    QuestsItemDetailsComponent
  ],
  imports: [
    RouterModule.forChild(donationRoutes),
    CommonModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    SearchModule,
    PermissionsModule
  ],
  exports: [
    RouterModule
  ]
})
export class DonationModule { }
