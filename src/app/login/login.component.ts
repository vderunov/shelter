import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { Login } from './login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, FormFiledsValidator.checkEmail],
      password: [null, FormFiledsValidator.checkPassword]
    });
  }

  isFieldInvalid(fieldName): boolean {
    return this.loginForm.get(fieldName).touched && this.loginForm.get(fieldName).invalid;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData: Login = { ...this.loginForm.value };
    this.authenticationService.login(loginData).subscribe();
  }

  goToRegistrationPage(): void {
    this.router.navigate(['/registraction-user']);
  }
}
