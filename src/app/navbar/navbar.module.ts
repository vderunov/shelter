import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { PermissionsModule } from '../shared/permissions/permissions.module';

@NgModule({
  declarations: [NavbarComponent, UserMenuComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    PermissionsModule
  ]
})
export class NavbarModule { }
