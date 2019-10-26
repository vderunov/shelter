import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { ShelterRegistrationComponent } from './shelter-registration/shelter-registration.component';

const sheltersRoutes: Routes = [
  { path: 'shelters', component: ShelterListComponent },
  { path: 'shelter-registration', component: ShelterRegistrationComponent }
];

@NgModule({
  declarations: [
    ShelterListComponent,
    ShelterCardComponent,
    ShelterRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sheltersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule, ShelterCardComponent]
})
export class SheltersModule {}
