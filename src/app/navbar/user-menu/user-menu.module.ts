import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserMenuComponent } from './user-menu.component';



@NgModule({
  declarations: [UserMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class UserMenuModule { }
