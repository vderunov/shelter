import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionDirective } from './directives/permission.directive';



@NgModule({
  declarations: [
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PermissionDirective
  ]
})
export class PermissionsModule { }
