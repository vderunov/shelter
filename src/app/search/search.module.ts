import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  exports: [SearchComponent]
})
export class SearchModule {}
