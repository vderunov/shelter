import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { SheltersService } from '../shelters-service/shelters.service';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './shelter-registration.component.html',
  styleUrls: [
    './shelter-registration.component.scss',
    '../../shared/style/style.scss'
  ]
})
export class ShelterRegistrationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private error = '';
  private shelterSub: Subscription;

  constructor(
    private sheltersService: SheltersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required)
    });
  }

  isFieldValid(fieldName): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const formData = { ...this.form.value };

    this.shelterSub = this.sheltersService
      .registerAddressShelter(formData)
      .subscribe(
        () => {
          this.form.reset();
          this.gotoMainPage();
        },
        error => {
          this.error = error.message;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.shelterSub) {
      this.shelterSub.unsubscribe();
    }
  }

  gotoMainPage(): void {
    this.router.navigate(['/']);
  }
}