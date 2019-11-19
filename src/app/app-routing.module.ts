import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserInfoComponent } from './user-registration/user-info/user-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/shelters', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'users', component: AdminUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
