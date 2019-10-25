import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+[.])+([a-zA-Z0-9]{2,4})+$'),
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9.,<>()-=_+!@#$%^&*~?]+$'),
      ]],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const user: User = {
      email: this.form.email.value,
      password: this.form.password.value
    };

    this.userService.login(user).subscribe();
  }

  goToRegistrationPage() {
    this.router.navigate(['/registraction-user']);
  }

}
