import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UrlParamCreatorService {

  public createUrlSearchParam(paramObj: object): string {
    return Object.entries(paramObj).reduce((paramString: string, keyValueArr: Array<string>) => {
      return paramString += `?${keyValueArr[0]}=${keyValueArr[1]}`;
    }, '')
  }
  
}