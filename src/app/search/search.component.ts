import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() onSearch = new EventEmitter<string>();

  public search(searchInputValue: string): void {
    this.onSearch.emit(searchInputValue);
  }

}
