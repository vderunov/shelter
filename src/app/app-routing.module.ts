import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ShelterRegistrationComponent } from './shelters/shelter-registration/shelter-registration.component';
import { AuctionComponent } from './auction/auction.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserInfoComponent } from './user-registration/user-info/user-info.component';
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
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
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
  },
  {
    path: 'auction',
    component: AuctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
