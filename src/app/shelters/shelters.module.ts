import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ShelterCardDetailsComponent } from './shelter-card-details/shelter-card-details.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { SearchModule } from '../search/search.module';
import { ReactiveFormsModule } from '@angular/forms';

const sheltersRoutes: Routes = [
  {path: 'shelters', component: ShelterListComponent},
  {path: 'shelters/:id', component: ShelterCardDetailsComponent}
];

@NgModule({
  declarations: [ShelterListComponent, ShelterCardComponent, ShelterCardDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
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
