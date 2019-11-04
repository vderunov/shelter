import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { Login } from './login.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public message: string;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      if (params['auth']) {
        this.message = 'Please login';
      }
    });

    this.loginForm = this.formBuilder.group({
      email: [null, FormFiledsValidator.checkEmail],
      password: [null, FormFiledsValidator.checkPassword]
    });
  }

  isFieldInvalid(fieldName): boolean {
    return (
      this.loginForm.get(fieldName).touched &&
      this.loginForm.get(fieldName).invalid
    );
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
