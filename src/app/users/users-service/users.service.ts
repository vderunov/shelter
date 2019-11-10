import { UserRegistrationModel } from './../models/user-registration.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private configService: ConfigService,
  ) { }

  public addUser(newUser: UserRegistrationModel) {
    console.log('User has been added', newUser);
  }

  public editUser(id: number, editedUser: UserRegistrationModel) {
    console.log(`User with id ${id} has been edited: ${editedUser}`);
  }

  public removeUser(id: number) {
    console.log(`User with id ${id} has been removed`);
  }
}
