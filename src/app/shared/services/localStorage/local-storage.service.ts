import { Injectable } from '@angular/core';
import { UserMenuComponent } from '../../../navbar/user-menu/user-menu.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static getItem(key: string): string {
    return localStorage.getItem(key);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }


}
