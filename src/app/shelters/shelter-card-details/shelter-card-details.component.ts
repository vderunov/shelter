import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SheltersService } from '../shelters-service/shelters.service';
import { Shelter } from '../models/shelter.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { MapMarker } from 'src/app/map/map-marker.model';

@Component({
  selector: 'app-shelter-card-details',
  templateUrl: './shelter-card-details.component.html',
  styleUrls: ['./shelter-card-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShelterCardDetailsComponent implements OnInit {
  private shelterId: string;
  public shelter: Shelter;
  public marker;
  public changedPhoto: string | ArrayBuffer;
  public permissions = Permissions;
  public profileForm: FormGroup;
  public isEdiDisabled: boolean;
  public isShowMap: boolean;

  constructor(
    private sheltersService: SheltersService,
    private activatedRoute: ActivatedRoute,
    private notifierService: NotifierService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  @ViewChild('uploadPhotoButton', {static: false}) uploadPhotoButton: ElementRef;

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.shelterId = this.activatedRoute.snapshot.params.id;
    this.getDetails();
  }

  private getDetails(): void {
    this.sheltersService.getDetails(this.shelterId).subscribe(shelter => {
      this.shelter = shelter;
      this.marker = this.sheltersService.createShelterLocation([shelter], 15);
      this.patchFormValues(shelter);
    });
  }

  public toggleMap(): void {
    this.isShowMap = !this.isShowMap;
  }

  public onSubmit(): void {
    this.toggleForm();
    const shelterChange = {
      name: this.profileForm.get('name').value,
      rating: this.shelter.rating,
      adressID: this.shelter.adressID,
      avatar: this.shelter.avatar,
      locationID: this.shelter.locationID
    };
    let addressChange = { ...this.profileForm.get('address').value };
    const isChangeAddress = Object.entries(addressChange).every(([key, value]) => this.shelter.address[key] === value);
    if (isChangeAddress) {
      addressChange = null;
    }
    this.sheltersService.putShelterDetails({
      id: this.shelter.id,
      addressID: this.shelter.adressID,
      address: addressChange,
      shelter: shelterChange,
    }).subscribe(_ => {
      this.notifierService.showNotice('Changes have been saved!', 'success');
    });
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onDelete(): void {
    this.sheltersService.deleteShelter(this.shelter).subscribe(_ => {
      this.notifierService.showNotice(`Shelter ${this.shelter.name} deleted!`, 'success');
      this.router.navigate(['/shelters']);
    });
  }

  public onReset(): void {
    this.patchFormValues(this.shelter);
    this.onEdit();
  }

  public createForm(): void {
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
      address: shelter.address ? shelter.address : this.profileForm.get('address')
    });
  }

  private toggleForm(): void {
    this.profileForm.enabled ? this.profileForm.disable() : this.profileForm.enable();
    this.isEdiDisabled = this.profileForm.disabled;
  }

  public onSelectedFilesChanged(event): void {
    const fileReader = new FileReader();
    if (event && event.length) {
      fileReader.onload = (ev: Event) => {
        this.shelter.avatar = event[0];
        this.changedPhoto = fileReader.result;
      };
      fileReader.readAsDataURL(event && event.length && event[0]);
    } else {
      this.shelter.avatar = null;
      this.changedPhoto = null;
    }
  }

  public onUploadClicked(event): void {
    this.toggleForm();
  }
}
