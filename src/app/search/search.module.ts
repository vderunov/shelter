import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [ SearchComponent ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class SearchModule { }
