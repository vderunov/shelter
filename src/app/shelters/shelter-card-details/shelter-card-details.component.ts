import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheltersService } from '../shelters-service/shelters.service';
import { Shelter } from '../models/shelter.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-shelter-card-details',
  templateUrl: './shelter-card-details.component.html',
  styleUrls: ['./shelter-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelterCardDetailsComponent implements OnInit {
  private shelterId: string;
  public shelter: Shelter;
  public profileForm: FormGroup;
  public isEdiDisabled: boolean;

  constructor(
    private sheltersService: SheltersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.shelterId = this.activatedRoute.snapshot.params.id;
    this.sheltersService.getDetails(this.shelterId).pipe(take(1)).subscribe(shelter => {
      this.shelter = shelter;
      this.patchFormValues(shelter);
    });
  }

  public onSubmit(): void {
    this.toggleForm();
    const data = {
      name: this.profileForm.get('name').value,
      rating: this.shelter.rating,
      adressID: this.shelter.adressID,
      avatar: this.profileForm.get('avatar').value,
      // photoPath: this.profileForm.get('photoPath').value
    };
    this.sheltersService.putShelter(this.shelter.id, data).subscribe(data1 => {
      console.log(data1);

    });
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onReset(): void {
    this.patchFormValues(this.shelter);
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      name: [null, Validators.required],
      avatar: [],
      photoPath: [],
      address: this.fb.group({
        country: [],
        region: [],
        city: [],
        street: [],
        house: [],
      })
    });
  }

  private patchFormValues(shelter: Shelter): void {
    this.profileForm.patchValue({
      name: shelter.name,
      avatar: shelter.avatar,
      photoPath: shelter.photoPath,
      address: {
        country: shelter.country,
        region: shelter.region,
        city: shelter.city,
        street: shelter.street,
        house: shelter.house
      }
    });
  }

  private toggleForm(): void {
    this.profileForm.enabled ? this.profileForm.disable() : this.profileForm.enable();
    this.isEdiDisabled = this.profileForm.disabled;
  }
}
