import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdminUserComponent} from './admin-user/admin-user.component';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: AdminUserComponent},
];

@NgModule({
  declarations: [UsersComponent, AdminUserComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(usersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule

  ],
  exports: [
    RouterModule,
    MatTabsModule,
  ]
})
export class UsersModule { }
