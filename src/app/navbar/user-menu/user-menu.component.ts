import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  constructor() { }

  public isLogged(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  public getUser(): string | boolean {
    if (this.isLogged()) {
      return JSON.parse(localStorage.getItem('user'))[0]['email'];
    } else {
      return false;
    }
  }

  public logOut(): void {
    localStorage.removeItem('user');
  }

  ngOnInit() {
  }

}
