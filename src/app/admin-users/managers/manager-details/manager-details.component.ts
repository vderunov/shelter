import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Manager } from '../models/manager.model';
import { ManagersService } from '../services/manager.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ManagerDetailsComponent implements OnInit, OnDestroy {
  public manager: Manager;
  public managerId: string;
  public profileForm: FormGroup;
  public isEditDisabled: boolean;
  public visibleFields = false;
  public changedPhoto: string | ArrayBuffer;
  private unsubscribe: Subject<void> = new Subject();
  avatar: File = null;

  constructor(
    private managersService: ManagersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.managerId = this.activatedRoute.snapshot.params.id;
    this.managersService
      .getManagerById(this.managerId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(managers => {
        this.patchFormValues(managers);
        this.manager = managers;
      });
  }

  public ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onEdit(): void {
    this.toggleForm();
    this.visibleFields = !this.visibleFields;
  }

  public onReset(): void {
    this.patchFormValues(this.manager);
  }

  public deleteUser() {
    this.managersService
      .deleteManagerById(this.managerId)
      .subscribe(() => this.router.navigate(['users']));
  }

  public changeInfo() {
    const managerChanges = {
      id: this.manager.id,
      name: this.profileForm.get('name').value,
      surname: this.profileForm.get('surname').value,
      patronymic: this.profileForm.get('patronymic').value,
      birthday: this.profileForm.get('birthday').value,
      rating: this.profileForm.get('rating').value,
      avatar: this.manager.avatar,
      childrenHouseID: this.manager.childrenHouseID,
      emailID: this.manager.emailID,
      photoPath: this.manager.photoPath,
    };
    this.managersService.updateManagerImageById(managerChanges)
      // this.managersService
      // .updateManagerImageById(this.avatar, this.managerId)
      // .updateManagerById(this.profileForm.value, this.managerId)
      .subscribe(() => this.onEdit());
  }

  public changeAvatar(event) {
    const fileReader = new FileReader();
    if (event && event.length) {
      fileReader.readAsDataURL(event[0]);
      fileReader.onload = () => {
        this.manager.avatar = event[0];
        this.changedPhoto = fileReader.result;
      };
    } else {
      this.manager.avatar = null;
      this.changedPhoto = null;
    }
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      name: [null, Validators.required],
      surname: [],
      patronymic: [],
      birthday: Date,
      avatar: [],
      photoPath: [],
      rating: [],
      id: [],
      childrenHouseID: [],
      emailID: []
    });
  }

  private patchFormValues(manager: Manager): void {
    this.profileForm.patchValue({
      name: manager.name,
      surname: manager.surname,
      patronymic: manager.patronymic,
      birthday: manager.birthday,
      avatar: manager.avatar,
      photoPath: manager.photoPath,
      rating: manager.rating,
      id: manager.id,
      childrenHouseID: manager.childrenHouseID,
      emailID: manager.emailID

    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
  }

}


//   public onSubmit(): void {
//     this.toggleForm();
//     const shelterChange = {
//       name: this.profileForm.get('name').value,
//       rating: this.shelter.rating,
//       adressID: this.shelter.adressID,
//       avatar: this.shelter.avatar,
//       locationID: this.shelter.locationID
//     };


//     this.sheltersService.putShelterDetails({
//       id: this.shelter.id,
//       addressID: this.shelter.adressID,
//       address: addressChange,
//       shelter: shelterChange,
//     })
//   }

//   private patchFormValues(shelter): void {
//     this.profileForm.patchValue({
//       name: shelter.name,
//       avatar: shelter.avatar,
//       photoPath: shelter.photoPath,
//     });
//   }



