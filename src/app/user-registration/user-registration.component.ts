import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { FormFieldsModel } from 'src/app/shared/validators/form-fields.model';
import { FormFiledsValidator } from 'src/app/shared/validators/form-fields-validator';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserRegistrationService } from './services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public maxInputLength: FormFieldsModel;
  public error = '';
  private destroy$: Subject<void> = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private notifier: NotifierService
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [null, FormFiledsValidator.checkName],
        patronymic: [null, FormFiledsValidator.checkName],
        surname: [null, FormFiledsValidator.checkName],
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

  public isFieldInvalid(fieldName): boolean {
    return (
      this.registerForm.get(fieldName).touched &&
      this.registerForm.get(fieldName).invalid
    );
  }

  public onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.userRegistrationService.addVolunteer(this.registerForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => {
          this.registerForm.reset();
          this.notifier.showNotice('Registration completed. Please log in', 'success');
          this.router.navigate(['/login']);
        },
        error => {
          this.notifier.showNotice(error.message, 'error');
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
