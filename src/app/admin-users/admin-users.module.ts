import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagersComponent} from './managers/managers.component';
import { HelpersComponent} from './helpers/helpers.component';
import { AdminUsersComponent } from './admin-users.component';
const usersRoutes: Routes = [
    { path: 'users', component: AdminUsersComponent },
    { path: 'users/:id', component: HelpersComponent},
    { path: 'manager/:id', component: ManagersComponent},
];

@NgModule({
  declarations: [AdminUsersComponent, HelpersComponent, ManagersComponent],
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
export class AdminUsersModule { }






