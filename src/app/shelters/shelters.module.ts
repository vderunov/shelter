import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ShelterCardComponent } from './shelter-card/shelter-card.component';
import { ShelterListComponent } from './shelter-list/shelter-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ShelterCardDetailsComponent } from './shelter-card-details/shelter-card-details.component';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { SearchModule } from '../search/search.module';
import { ShelterRegistrationComponent } from './shelter-registration/shelter-registration.component';
import { MatFileUploadModule } from 'mat-file-upload';
import { PermissionsModule } from '../shared/permissions/permissions.module';
import { SheltersMapComponent } from './shelters-map/shelters-map.component';
import { MapModule } from '../map/map.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const sheltersRoutes: Routes = [
  { path: 'shelters-map', component: SheltersMapComponent },
  { path: 'shelter-registration', component: ShelterRegistrationComponent },
  { path: 'shelters', component: ShelterListComponent },
  { path: 'shelters/:id', component: ShelterCardDetailsComponent }
];

@NgModule({
  declarations: [
    ShelterListComponent,
    ShelterCardComponent,
    ShelterCardDetailsComponent,
    ShelterRegistrationComponent,
    SheltersMapComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(sheltersRoutes),
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    SearchModule,
    MatFileUploadModule,
    MatIconModule,
    PermissionsModule,
    MapModule,
    MatProgressSpinnerModule
  ],
  exports: [RouterModule, ShelterCardComponent]
})
export class SheltersModule {}
