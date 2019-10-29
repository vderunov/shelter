import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  @Output() searchButton = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  public search(searchInputValue: string): void {
    this.searchButton.emit(searchInputValue);
  }

  public reset() {
    this.searchForm.setValue({ search: '' });
  }
}
