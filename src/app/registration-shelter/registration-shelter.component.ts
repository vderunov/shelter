import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Shelter } from './registration-shelter-interfaces';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './registration-shelter.component.html',
  styleUrls: ['./registration-shelter.component.scss']
})
export class RegistrationShelterComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\([0-9]{3}\)\s*|[0-9]{3}\/-)[0-9]{3}-[0-9]{4}$/)
      ]),
      address: new FormControl('', Validators.required),
      kids: new FormControl('', Validators.required),
      info: new FormControl('')
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    } else {
      const formData = { ...this.form.value };
      this.form.reset();
    }

    const shelter: Shelter = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      kids: this.form.value.kids,
      info: this.form.value.info
    };
  }

  gotoMainPage(): void {
    this.router.navigate(['/']);
  }
}
