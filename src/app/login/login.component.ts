import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { NotifierService } from '../shared/services/notifier/notifier.service';
import { AuthStateService } from '../shared/services/state/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public personId: string | string[];
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private notifier: NotifierService,
    private authStateService: AuthStateService
  ) { }

  public ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this))
      .subscribe((params: Params) => {
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

    this.authenticationService.login(this.loginForm.value)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.loginForm.reset();
          this.personId = this.authStateService.getStateProperty('personId');
          if (!!this.personId) {
            this.router.navigate(['/shelters']);
            this.notifier.showNotice('Welcome!', 'success');
          } else {
            this.router.navigate(['/user-info']);
            this.notifier.showNotice('Please fill out the form', 'success');
          }
        },
        error => {
          this.notifier.showNotice(error.message, 'error');
        }
      );
  }

  public goToRegistrationPage(): void {
    this.router.navigate(['/user-registration', { role: 'volunteer' }]);
  }

  public ngOnDestroy(): void { }
}
