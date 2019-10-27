import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationShelterComponent } from './registration-shelter/registration-shelter.component';
import { LoginComponent } from './login/login.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';

const routes: Routes = [
  { path: 'registration-shelter', component: RegistrationShelterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registraction-user', component: RegistrationUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
