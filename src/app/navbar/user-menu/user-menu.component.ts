import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  constructor() { }

  public isLogged(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  public getUser(): string {
      return JSON.parse(localStorage.getItem('user'))[0]['email'];
  }

  public logOut(): void {
    localStorage.removeItem('user');
  }
}
