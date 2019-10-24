import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { SheltersService } from './shelters-service/shelters.service';
import { HttpClientModule } from '@angular/common/http';

const sheltersRoutes: Routes = [
  { path: 'shelters', component: ShelterListComponent }
];

@NgModule({
  declarations: [ShelterListComponent, ShelterCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sheltersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [SheltersService],
  exports: [RouterModule, ShelterCardComponent]
})
export class SheltersModule { }
