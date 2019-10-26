import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { Router } from '@angular/router';
import { NewUser } from './registration-user.interface';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  private registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [null, FormFiledsValidator.checkName],
        lastName: [null, FormFiledsValidator.checkName],
        phone: ['+380', FormFiledsValidator.checkPhone],
        email: [null, FormFiledsValidator.checkEmail],
        password: [null, FormFiledsValidator.checkPassword],
        confirmPassword: [null, FormFiledsValidator.checkPassword]
      },
      {
        validator: FormFiledsValidator.matchPassword
      }
    );
  }

  isFieldInvalid(fieldName): boolean {
    return (
      this.registerForm.get(fieldName).touched &&
      this.registerForm.get(fieldName).invalid
    );
  }

  goToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const newUser: NewUser = { ...this.registerForm.value };
    this.authenticationService.addUser(newUser);

    this.goToLoginPage();
  }
}
