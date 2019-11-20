import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminUsersComponent } from './admin-users.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from '../search/search.module';
import { MatFileUploadModule } from 'mat-file-upload';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

const adminRoutes: Routes = [
  { path: 'users', component: AdminUsersComponent },
  { path: 'users/helpers', component: UserListComponent },
  { path: 'users/managers', component: UserListComponent },
  { path: 'helpers/:id', component: UserDetailsComponent },
  { path: 'managers/:id', component: UserDetailsComponent },
];

@NgModule({
  declarations: [
    AdminUsersComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(adminRoutes),
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
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
    FormsModule,
    MatDatepickerModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    RouterModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AdminUsersModule { }
