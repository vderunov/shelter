import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SheltersService } from '../shelters-service/shelters.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AddressShelter } from '../models/address-shelter.interface';
import { Shelter } from '../models/shelter.interface';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './shelter-registration.component.html',
  styleUrls: ['./shelter-registration.component.scss']
})
export class ShelterRegistrationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public error = '';
  private destroy$: Subject<void> = new Subject();

  constructor(
    private sheltersService: SheltersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });
  }

  public isFieldValid(fieldName): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const addressDate: AddressShelter = {
      country: this.form.value.country,
      region: this.form.value.region,
      city: this.form.value.city,
      street: this.form.value.city,
      house: this.form.value.city
    };

    const shelterDate: Shelter = {
      name: this.form.value.name,
      rating: this.form.value.rating,
      adressID: null,
      avatar: null,
      locationID: null
    };

    this.sheltersService
      .registerShelter(addressDate, shelterDate)
      .pipe(takeUntil(this.destroy$))
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

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public gotoMainPage(): void {
    this.router.navigate(['/']);
  }
}
