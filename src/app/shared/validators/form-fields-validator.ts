import { AbstractControl, Validators } from '@angular/forms';

export class FormFiledsValidator {
  static checkName = [
    Validators.required,
    Validators.pattern('^[a-zA-Zа-яА-Я\' -]+$'),
    Validators.minLength(2),
    Validators.maxLength(20)
  ]

  static checkPhone = [
    Validators.required,
    Validators.pattern('^[+][0-9]+$'),
    Validators.minLength(13),
    Validators.maxLength(13)
  ]

  static checkEmail = [
    Validators.required,
    Validators.email,
    Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+[.])+([a-zA-Z0-9]{2,4})+$'),
    Validators.minLength(6),
    Validators.maxLength(20)
  ]

  static checkPassword = [
    Validators.required,
    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9.,<>()-=_+!@#$%^&*~?]+$'),
    Validators.minLength(6),
    Validators.maxLength(20)
  ]

  static matchPassword(control: AbstractControl) {
    let password = control.get('password').value;
    let confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
    } else {
      return null;
    }
  }
}
