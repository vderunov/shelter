import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NeedsComponent } from './needs-list/needs.component';

const needsRoutes: Routes = [
  { path: 'needs', component: NeedsComponent }
];

@NgModule({
  declarations: [NeedsComponent],
  imports: [
    RouterModule.forChild(needsRoutes),
    CommonModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})

export class NeedsModule { }
