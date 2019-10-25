import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationShelterComponent } from './registration-shelter/registration-shelter.component';

const routes: Routes = [
  { path: 'registration-shelter', component: RegistrationShelterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}