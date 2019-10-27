import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http';
import { NeedsComponent } from './needs-list/needs.component';
import { SearchModule } from '../search/search.module';
import { NeedCardComponent } from './need-card/need-card.component';
import { NeedCardDetailsComponent } from './need-card-details/need-card-details.component';

const needsRoutes: Routes = [
  { path: 'needs', component: NeedsComponent },
  { path: 'needs/:id', component: NeedCardDetailsComponent }
];

@NgModule({
  declarations: [NeedsComponent, NeedCardComponent, NeedCardDetailsComponent],
  imports: [
    RouterModule.forChild(needsRoutes),
    CommonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    SearchModule
  ],
  exports: [
    RouterModule,
    NeedCardComponent,
    NeedCardDetailsComponent
  ]
})

export class NeedsModule { }
