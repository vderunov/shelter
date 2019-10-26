import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdminUserComponent} from './admin-user/admin-user.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [RouterModule]
})
export class UsersModule { }
