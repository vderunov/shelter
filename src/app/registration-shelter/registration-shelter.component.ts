import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ShelterService } from '../shared/services/shelter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './registration-shelter.component.html',
  styleUrls: ['./registration-shelter.component.scss']
})
export class RegistrationShelterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  error = '';
  shelterSub: Subscription;

  constructor(private shelterService: ShelterService, private router: Router) {}

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

  isFieldValid(fieldName): boolean {
    return this.form.get(fieldName).touched && this.form.get(fieldName).invalid;
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const formData = { ...this.form.value };

    this.shelterSub = this.shelterService.registerShelter(formData).subscribe(
      () => {
        this.form.reset();
        this.gotoMainPage();
      },
      error => {
        this.error = error.message;
        setTimeout(() => {
          this.error = '';
        }, 3000);
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
