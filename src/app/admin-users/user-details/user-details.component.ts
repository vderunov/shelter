import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUserService } from '../services/admin-user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Helper } from '../models/helper.model';
import { Manager } from '../models/manager.model';
import { Subject } from 'rxjs';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';

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
  public formChanges: Manager | Helper;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private notifierService: NotifierService,
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
    this.adminUserService.getUserById(this.userRole, this.userId)
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
    this.adminUserService.deleteUserById(this.userRole, this.userId)
    .subscribe(_ => {
      this.notifierService.showNotice(`User ${this.user.name} was deleted!`, 'success');
      this.router.navigate(['users']);
    });
  }

  public changeInfo() {
    if (this.userRole === 'managers') {
      this.formChanges = {
        id: this.user.id,
        name: this.profileForm.get('name').value,
        surname: this.profileForm.get('surname').value,
        patronymic: this.profileForm.get('patronymic').value,
        birthday: this.profileForm.get('birthday').value.toDateString(),
        rating: this.profileForm.get('rating').value,
        avatar: this.user.avatar,
        childrenHouseID: this.user.childrenHouseID,
        emailID: this.user.emailID
      } as Manager;
    } else {
      this.formChanges = {
        id: this.user.id,
        name: this.profileForm.get('name').value,
        surname: this.profileForm.get('surname').value,
        patronymic: this.profileForm.get('patronymic').value,
        birthday: this.profileForm.get('birthday').value.toDateString(),
        rating: this.profileForm.get('rating').value,
        avatar: this.user.avatar
      } as Helper;
    }

    this.adminUserService.updateUserById(this.userRole, this.userId, this.formChanges)
      .subscribe(_ => {
        this.notifierService.showNotice('Changes have been saved!', 'success');
      });
    this.onEdit();
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
      birthday: [''],
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
