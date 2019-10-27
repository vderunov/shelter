import { Component } from '@angular/core';
import { LocalStorageService } from '../../shared/services/localStorage/local-storage.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  constructor() { }

  public isLogged(): boolean {
    return Boolean(LocalStorageService.getItem('user'));
  }

  public getUser(): string {
    return JSON.parse(LocalStorageService.getItem('user'))[0]['email'];
  }

  public logOut(): void {
    LocalStorageService.removeItem('user');
  }
}
