import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Manager } from '../../models/manager.model';
import { AdminUserService } from '../../services/admin-user.service';

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

  constructor(
    private adminUserService: AdminUserService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.managerId = this.activatedRoute.snapshot.params.id;
    this.adminUserService
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
    this.adminUserService
      .deleteManagerById(this.managerId)
      .subscribe(() => this.router.navigate(['users']));
  }

  public changeInfo() {
    const managerChanges = {
      id: this.manager.id,
      name: this.profileForm.get('name').value,
      surname: this.profileForm.get('surname').value,
      patronymic: this.profileForm.get('patronymic').value,
      birthday: this.profileForm.get('birthday').value.toDateString(),
      rating: this.profileForm.get('rating').value,
      avatar: this.manager.avatar,
      childrenHouseID: this.manager.childrenHouseID,
      emailID: this.manager.emailID,
      photoPath: this.manager.photoPath
    };
    this.adminUserService.updateManagerById(managerChanges)
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
      surname: [null, Validators.required],
      patronymic: [],
      birthday: ['', Validators.required],
      rating: [null, Validators.required]
    });
  }

  private patchFormValues(manager: Manager): void {
    this.profileForm.patchValue({
      name: manager.name,
      surname: manager.surname,
      patronymic: manager.patronymic,
      birthday: manager.birthday,
      rating: manager.rating
    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
  }
}
