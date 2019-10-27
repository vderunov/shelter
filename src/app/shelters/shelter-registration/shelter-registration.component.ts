import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SheltersService } from '../shelters-service/shelters.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './shelter-registration.component.html',
  styleUrls: ['./shelter-registration.component.scss']
})
export class ShelterRegistrationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private error = '';
  private destroy$: Subject<void> = new Subject();

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

  private isFieldValid(fieldName): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const formData = { ...this.form.value };

    this.sheltersService
      .registerAddressShelter(formData)
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
