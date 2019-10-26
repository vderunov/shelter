import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  @Output() onSearch = new EventEmitter<string>();

  public search(searchInputValue: string): void {
    this.onSearch.emit(searchInputValue);
  }
}
