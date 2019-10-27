import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ShelterCardDetailsComponent } from './shelter-card-details/shelter-card-details.component';
import { MatButtonModule } from '@angular/material';
import { SearchModule } from '../search/search.module';

const sheltersRoutes: Routes = [
  {path: 'shelters', component: ShelterListComponent},
  {path: 'shelters/:id', component: ShelterCardDetailsComponent}
];

@NgModule({
  declarations: [ShelterListComponent, ShelterCardComponent, ShelterCardDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(sheltersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    SearchModule
  ],
  exports: [RouterModule, ShelterCardComponent]
})
export class SheltersModule { }
