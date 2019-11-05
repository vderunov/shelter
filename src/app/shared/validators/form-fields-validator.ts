import { AbstractControl, Validators } from '@angular/forms';

export class FormFiledsValidator {
  public static checkName = [
    Validators.required,
    Validators.pattern('^[a-zA-Zа-яА-Я\' -]+$'),
    Validators.minLength(2),
    Validators.maxLength(20)
  ];

  public static checkPhone = [
    Validators.required,
    Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
  ];

  public static checkEmail = [
    Validators.required,
    Validators.email,
    Validators.pattern(
      '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+[.])+([a-zA-Z0-9]{2,4})+$'
    ),
    Validators.minLength(6),
    Validators.maxLength(20)
  ];

  public static checkPassword = [
    Validators.required,
    Validators.pattern(
      '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9.,<>()-=_+!@#$%^&*~?]+$'
    ),
    Validators.minLength(6),
    Validators.maxLength(20)
  ];

  public static matchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
    } else {
      control.get('confirmPassword').setErrors(null);
      return null;
    }
  }

  public static getMaxInputLength() {
    return {
      name: 20,
      surname: 20,
      phone: 14,
      email: 20,
      address: 100,
      password: 20
    };
  }
}
