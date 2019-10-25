import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationShelterComponent } from './registration-shelter.component';
import { ShelterService } from '../shared/services/shelter.service';

@NgModule({
  declarations: [RegistrationShelterComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ShelterService]
})
export class RegistrationShelterModule {}
