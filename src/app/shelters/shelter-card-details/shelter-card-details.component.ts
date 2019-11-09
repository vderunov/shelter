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
  private shelterId: number;
  public shelter: Shelter;
  public profileForm: FormGroup;
  public isEdiDisabled: boolean;
  public isMessage = false;

  constructor(
    private sheltersService: SheltersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.shelterId = Number(this.activatedRoute.snapshot.params.id);
    this.getDetails();
  }

  private getDetails() {
    this.sheltersService.getDetails(this.shelterId).subscribe(shelter => {
      this.shelter = shelter;
      this.patchFormValues(shelter);
    });
  }

  public onSubmit(): void {
    this.toggleForm();
    const shelterChange = {
      name: this.profileForm.get('name').value,
      rating: this.shelter.rating,
      adressID: this.shelter.adressID,
      avatar: this.profileForm.get('avatar').value,
      locationID: this.shelter.locationID
    };
    let addressChange = { ...this.profileForm.get('address').value };
    const isChangeAddress = Object.entries(addressChange).every(([key, value]) => this.shelter.address[key] === value);
    if (isChangeAddress) {
      addressChange = null;
    }
    this.sheltersService.putShelterDetails({
      id: this.shelter.id,
      shelter: shelterChange,
      addressID: this.shelter.adressID,
      address: addressChange,
    }).subscribe(_ => {
      // notify user that info was saved throw notify service
    });
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onReset(): void {
    this.patchFormValues(this.shelter);
    this.onEdit();
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
        house: []
      })
    });
  }

  private patchFormValues(shelter): void {
    this.profileForm.patchValue({
      name: shelter.name,
      avatar: shelter.avatar,
      photoPath: shelter.photoPath,
      address: shelter.address
    });
  }

  private toggleForm(): void {
    this.profileForm.enabled ? this.profileForm.disable() : this.profileForm.enable();
    this.isEdiDisabled = this.profileForm.disabled;
  }
}
