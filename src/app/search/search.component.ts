import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public search(searchInputValue: string): void {
    this.onSearch.emit(searchInputValue);
  }

}
