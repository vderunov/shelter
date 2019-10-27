import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { UserMenuComponent } from './user-menu.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule
  ]
})
export class UserMenuModule { }
