import { NotifierService } from '../notifier/notifier.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../shared/services/user/authentication.service';
import { FormFiledsValidator } from '../shared/validators/form-fields-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrls: ['./registration-user.component.scss']
})
export class RegistrationUserComponent implements OnInit {
  public registerForm: FormGroup;
  public maxInputLength: object;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
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

    this.authenticationService.addUser(this.registerForm.value);
    // TODO: if registration is successful:
    this.notifier.showNotice('Done. Now please log in', 'success');
    this.router.navigate(['/login']);
  }
}
