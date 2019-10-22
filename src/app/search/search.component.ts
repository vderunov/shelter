import { Component, OnInit, Input } from '@angular/core';

import { SearchService } from './search.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchTypes: Array<string>;
  @Input() list: Array<object>;

  public searchValue: string;
  public faSearch = faSearch;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  public search(): void {
    this.getFilteredDataBySearch();
  }

  public getFilteredDataBySearch(): Array<object> {
    return this.searchService.getFilteredDataBySearch(
      this.list,
      this.searchValue,
      this.searchTypes
    );
  }
}