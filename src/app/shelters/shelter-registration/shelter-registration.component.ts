import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SheltersService } from '../shelters-service/shelters.service';
import { NotifierService } from '../../shared/services/notifier/notifier.service';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-registration-shelter',
  templateUrl: './shelter-registration.component.html',
  styleUrls: ['./shelter-registration.component.scss']
})
export class ShelterRegistrationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public error = '';
  private file: File;

  constructor(private sheltersService: SheltersService, private router: Router, private notifierService: NotifierService) {}

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

    this.sheltersService
      .registerShelter(this.form.value, this.file)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this.form.reset();
          this.gotoMainPage();
        },
        error => {
          this.notifierService.showNotice(error.message, 'error');
        }
      );
  }

  public ngOnDestroy(): void {}

  public gotoMainPage(): void {
    this.router.navigate(['/']);
  }

  public onSelectedFilesChanged($event: any) {
    this.file = $event.target.files[0];
  }
}
