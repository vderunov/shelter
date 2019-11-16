import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ShelterRegistrationComponent } from './shelters/shelter-registration/shelter-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/shelters', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registraction-user', component: RegistrationUserComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'registration-shelter', component: ShelterRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
