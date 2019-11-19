import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { FormFieldsModel } from 'src/app/shared/validators/form-fields.model';
import { FormFiledsValidator } from 'src/app/shared/validators/form-fields-validator';
import { UserRegistrationService } from '../services/user-registration.service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';
import { SheltersService } from 'src/app/shelters/shelters-service/shelters.service';
import { Shelter } from 'src/app/shelters/models/shelter.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  public role: string;
  public userInfoForm: FormGroup;
  public maxInputLength: FormFieldsModel;
  public shelters$: Observable<Shelter[]>;

  constructor(
    private formBuilder: FormBuilder,
    private userRegistrationService: UserRegistrationService,
    private router: Router,
    private notifier: NotifierService,
    private authStateService: AuthStateService,
    private sheltersService: SheltersService
  ) { }

  public ngOnInit(): void {
    this.role = this.authStateService.getStateProperty('roles')[0] as Roles;
    this.userInfoForm = this.formBuilder.group(
      {
        name: [null, FormFiledsValidator.checkName],
        patronymic: [null, FormFiledsValidator.checkName],
        surname: [null, FormFiledsValidator.checkName],
        birthday: [null, FormFiledsValidator.checkBirthday],
        shelterId: [null]
      }
    );
    this.maxInputLength = FormFiledsValidator.getMaxInputLength();
    this.setUserRoleValidators();
  }

  private setUserRoleValidators(): void {
    if (this.isRepresentative()) {
      this.userInfoForm.get('shelterId').setValidators(FormFiledsValidator.checkShelter);
      this.shelters$ = this.sheltersService.getShelters();
    }
  }

  public isFieldInvalid(fieldName): boolean {
    return (
      this.userInfoForm.get(fieldName).touched &&
      this.userInfoForm.get(fieldName).invalid
    );
  }

  public isRepresentative(): boolean {
    return this.role === 'Representative';
  }

  public onSubmit(): void {
    if (this.userInfoForm.invalid) {
      return;
    }

    this.userRegistrationService.addUserInfo(this.userInfoForm.value, this.role)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.userInfoForm.reset();
          this.router.navigate(['/shelters']);
          this.notifier.showNotice('Personal info updated', 'success');
        },
        error => {
          this.notifier.showNotice(error.message, 'error');
        }
      );
  }

  public ngOnDestroy(): void { }
}
