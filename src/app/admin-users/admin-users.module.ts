import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagersComponent } from './managers/managers.component';
import { AdminUsersComponent } from './admin-users.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { ManagerItemComponent } from './managers/manager-item/manager-item.component';
import { HelperItemComponent } from './helpers/helper-item/helper-item.component';
import { HelpersListComponent } from './helpers/helpers-list/helpers-list.component';
import { HelperDetailsComponent } from './helpers/helper-details/helper-details.component';
import { ManagerDetailsComponent } from './managers/manager-details/manager-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const usersRoutes: Routes = [
  { path: 'users', component: AdminUsersComponent },
  { path: 'users/helpers', component: HelpersListComponent },
  { path: 'users/managers', component: ManagersListComponent },
  { path: 'helper/:id', component: HelperDetailsComponent },
  { path: 'manager/:id', component: ManagerDetailsComponent },

];
@NgModule({

  declarations: [
    AdminUsersComponent,
    ManagersComponent,
    ManagersListComponent,
    ManagerItemComponent,
    HelperItemComponent,
    HelpersListComponent,
    HelperDetailsComponent,
    ManagerDetailsComponent,
 ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(usersRoutes),
    MatGridListModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RouterModule,
    MatTabsModule,
  ]
})
export class AdminUsersModule { }
