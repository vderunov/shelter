import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { FormFieldsModel } from 'src/app/shared/validators/form-fields.model';
import { FormFiledsValidator } from 'src/app/shared/validators/form-fields-validator';
import { UserRegistrationService } from './services/user-registration.service';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  public userRegForm: FormGroup;
  public maxInputLength: FormFieldsModel;
  public role: string;

  constructor(
    private formBuilder: FormBuilder,
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private notifier: NotifierService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private authStateService: AuthStateService
  ) { }

  public ngOnInit(): void {
    this.role = this.route.snapshot.paramMap.get('role');
    this.userRegForm = this.formBuilder.group(
      {
        phone: [null, FormFiledsValidator.checkPhone],
        email: [null, FormFiledsValidator.checkEmail],
        password: [null, FormFiledsValidator.checkPassword],
        confirmPassword: [null, FormFiledsValidator.checkPassword]
      },
      {
        validator: FormFiledsValidator.matchPassword
      }
    );
    this.maxInputLength = FormFiledsValidator.getMaxInputLength();
  }

  public ngOnDestroy(): void { }

  public isFieldInvalid(fieldName): boolean {
    return (
      this.userRegForm.get(fieldName).touched &&
      this.userRegForm.get(fieldName).invalid
    );
  }

  public onSubmit(): void {
    if (this.userRegForm.invalid) {
      return;
    }

    this.userRegistrationService.addUser(this.userRegForm.value, this.role)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.notifier.showNotice('New user has been created', 'success');
          if (this.isAdmin()) {
            this.router.navigate(['/users']);
          } else {
            this.authenticationService.login({
              email: this.userRegForm.value.email,
              password: this.userRegForm.value.password
            }).pipe(untilDestroyed(this))
              .subscribe(() => this.router.navigate(['/user-info']));
          }
        },
        error => {
          this.notifier.showNotice(error.error || 'Something bad happened, please try again later.', 'error');
        }
      );
  }

  private isAdmin(): boolean {
    const state = this.authStateService.getStateValue();
    if (!!state) {
      return state.roles[0] === 'Admin';
    }
  }
}
