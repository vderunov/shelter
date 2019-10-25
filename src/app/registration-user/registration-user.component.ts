import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/services/user/user.service';
import { FormFiledsValidator } from './form-fields-validator';
import { Router } from '@angular/router';
import { NewUser } from './registration-user.interface';


@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, FormFiledsValidator.checkName],
      lastName: [null, FormFiledsValidator.checkName],
      phone: ['+380', FormFiledsValidator.checkPhone],
      email: [null, FormFiledsValidator.checkEmail],
      password: [null, FormFiledsValidator.checkPassword],
      confirmPassword: [null, FormFiledsValidator.checkPassword]
    }, {
        validator: FormFiledsValidator.matchPassword
      });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const newUser: NewUser = {
      firstName: this.form.firstName.value,
      lastName: this.form.lastName.value,
      phone: this.form.phone.value,
      email: this.form.email.value,
      password: this.form.password.value,
    };

    this.userService.addUser(newUser);
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
