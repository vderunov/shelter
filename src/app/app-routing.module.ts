import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'users', component: AdminUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
