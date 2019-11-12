import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { FormFields } from 'src/app/shared/validators/form-field-validator.interface';
import { FormFiledsValidator } from 'src/app/shared/validators/form-fields-validator';
import { UsersService } from '../users-service/users.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  public registerForm: FormGroup;
  public maxInputLength: FormFields;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private notifier: NotifierService
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [null, FormFiledsValidator.checkName],
        surname: [null, FormFiledsValidator.checkName],
        phone: ['', FormFiledsValidator.checkPhone],
        email: [null, FormFiledsValidator.checkEmail],
        address: [null],
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

    this.usersService.addUser(this.registerForm.value);
    // TODO: if registration is successful:
    this.notifier.showNotice('Done. Now please log in', 'success');
    this.router.navigate(['/login']);
  }
}
