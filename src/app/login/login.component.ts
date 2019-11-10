import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { LoginModel } from './login.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NotifierService } from '../shared/services/notifier/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private notifier: NotifierService
  ) { }

  public ngOnInit(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      if (params.auth) {
        this.notifier.showNotice('Please login', 'warning');
      }
    });

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

    const loginData: LoginModel = { ...this.loginForm.value };
    this.authenticationService.login(loginData).subscribe();
  }

  public goToRegistrationPage(): void {
    this.router.navigate(['/user-registration']);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
