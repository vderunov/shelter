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
  public loginForm: FormGroup;

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

  public isFieldInvalid(fieldName): boolean {
    return (
      this.loginForm.get(fieldName).touched &&
      this.loginForm.get(fieldName).invalid
    );
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData: Login = { ...this.loginForm.value };
    this.authenticationService.login(loginData).subscribe();
  }

  public goToRegistrationPage(): void {
    this.router.navigate(['/registraction-user']);
  }
}
