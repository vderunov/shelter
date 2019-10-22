import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  public getFilteredDataBySearch(
    list: Array<object>,
    searchValue: string = "",
    searchTypes: Array<string>
  ) {

    return list.filter((dataNote: object) => {
      return searchTypes.some((propName: string) => {
        return dataNote[propName].toLowerCase().indexOf(searchValue.toLowerCase()) === -1
          ? false
          : true;
      });
    });
  }
}