import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ShelterCardDetailsComponent } from './shelter-card-details/shelter-card-details.component';
import { SearchModule } from '../search/search.module';
import { ShelterRegistrationComponent } from './shelter-registration/shelter-registration.component';

const sheltersRoutes: Routes = [
  { path: 'shelter-registration', component: ShelterRegistrationComponent },
  { path: 'shelters', component: ShelterListComponent },
  { path: 'shelters/:id', component: ShelterCardDetailsComponent }
];

@NgModule({
  declarations: [
    ShelterListComponent,
    ShelterCardComponent,
    ShelterCardDetailsComponent,
    ShelterRegistrationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(sheltersRoutes),
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    SearchModule
  ],
  exports: [RouterModule, ShelterCardComponent]
})
export class SheltersModule {}
