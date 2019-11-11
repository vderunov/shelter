import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUsersComponent } from './admin-users.component';
import { ManagersListComponent } from './managers/managers-list/managers-list.component';
import { ManagerItemComponent } from './managers/manager-item/manager-item.component';
import { HelperItemComponent } from './helpers/helper-item/helper-item.component';
import { HelpersListComponent } from './helpers/helpers-list/helpers-list.component';
import { HelperDetailsComponent } from './helpers/helper-details/helper-details.component';
import { ManagerDetailsComponent } from './managers/manager-details/manager-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from '../search/search.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFileUploadModule } from 'mat-file-upload';

const adminRoutes: Routes = [
  { path: 'users', component: AdminUsersComponent },
  { path: 'users/helpers', component: HelpersListComponent },
  { path: 'users/managers', component: ManagersListComponent },
  { path: 'helper/:id', component: HelperDetailsComponent },
  { path: 'manager/:id', component: ManagerDetailsComponent },
];

@NgModule({
  declarations: [
    AdminUsersComponent,
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
    RouterModule.forRoot(
      adminRoutes,
    ),
    MatGridListModule,
    MatFileUploadModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    SearchModule,
    MatDialogModule
  ],
  exports: [
    RouterModule,
    MatTabsModule,
  ]
})

export class AdminUsersModule { }
