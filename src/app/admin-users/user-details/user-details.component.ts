import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserService } from '../services/admin-user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Helper } from '../models/helper.model';
import { Manager } from '../models/manager.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserDetailsComponent implements OnInit, OnDestroy {
  public user;
  public userId: string;
  public profileForm: FormGroup;
  public isEditDisabled: boolean;
  public visibleFields = false;
  public changedPhoto: string | ArrayBuffer;
  public userRole: string;
  public currUser;
  public userRoleRequest = {
    helpers: {
      getById: 'getHelperById',
      deleteById: 'deleteHelperById',
      updateById: 'updateHelperById',
      userChanges: 'helperChanges',
    },
    managers: {
      getById: 'getManagerById',
      deleteById: 'deleteManagerById',
      updateById: 'updateManagerById',
      userChanges: 'managerChanges',
    }
  };
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
    this.userId = this.activatedRoute.snapshot.params.id;
    this.userRole = this.activatedRoute.snapshot.url[0].path;
    this.currUser = this.userRoleRequest[this.userRole];
    const userMethod = this.currUser.getById;
    this.adminUserService[userMethod](this.userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(users => {
        this.patchFormValues(users);
        this.user = users;
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
    this.patchFormValues(this.user);
  }

  public deleteUser() {
    const userMethod = this.currUser.deleteById;
    this.adminUserService[userMethod](this.userId)
      .subscribe(() => this.router.navigate(['users']));
  }

  public changeInfo() {
    const formChanges = this.currUser.userChanges;
    const userMethod = this.currUser.updateById;
    const userFormChanges = {
      managerChanges:  {
        id:  this.user.id,
        name: this.profileForm.get('name').value,
        surname: this.profileForm.get('surname').value,
        patronymic: this.profileForm.get('patronymic').value,
        birthday: this.profileForm.get('birthday').value.toDateString(),
        rating: this.profileForm.get('rating').value,
        avatar: this.user.avatar,
        childrenHouseID: this.user.childrenHouseID,
        emailID: this.user.emailID
      } as Manager,
      helperChanges: {
        id: this.user.id,
        name: this.profileForm.get('name').value,
        surname: this.profileForm.get('surname').value,
        patronymic: this.profileForm.get('patronymic').value,
        birthday: this.profileForm.get('birthday').value.toDateString(),
        rating: this.profileForm.get('rating').value,
        avatar: this.user.avatar
      } as Helper,
    };
    this.adminUserService[userMethod](userFormChanges[formChanges])
      .subscribe(() => this.onEdit());
  }

  public changeAvatar(event) {
    const fileReader = new FileReader();
    if (event && event.length) {
      fileReader.readAsDataURL(event[0]);
      fileReader.onload = () => {
        this.user.avatar = event[0];
        this.changedPhoto = fileReader.result;
      };
    } else {
      this.user.avatar = null;
      this.changedPhoto = null;
    }
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      patronymic: ['', Validators.required],
      birthday: [],
      rating: ['', Validators.required]
    });
  }

  private patchFormValues(user: Helper | Manager): void {
    this.profileForm.patchValue({
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      birthday: user.birthday,
      rating: user.rating
    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
  }
}
