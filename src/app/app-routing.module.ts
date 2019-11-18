import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ShelterRegistrationComponent } from './shelters/shelter-registration/shelter-registration.component';
import { GuardService } from './shared/guard.service';
import { Roles } from './shared/permissions/models/roles.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shelters',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registraction-user',
    component: RegistrationUserComponent
  },
  {
    path: 'users',
    component: AdminUsersComponent,
    canActivate: [GuardService],
    data: { allowedRoles: [Roles.Admin] }
  },
  {
    path: 'registration-shelter',
    component: ShelterRegistrationComponent,
    canActivate: [GuardService],
    data: { allowedRoles: [Roles.Admin] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
