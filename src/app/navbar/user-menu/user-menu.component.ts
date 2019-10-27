import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  userEmail: string;
  constructor(private router: Router) { }

  public isLogged(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  public getUser(): void | boolean {
    if (this.isLogged()) {
      this.userEmail = JSON.parse(localStorage.getItem('user'))[0]['email'];
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
