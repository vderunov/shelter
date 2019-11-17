import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpersService } from '../services/helper.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Helper } from '../models/helper.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-helper-details',
  templateUrl: './helper-details.component.html',
  styleUrls: ['./helper-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HelperDetailsComponent implements OnInit, OnDestroy {
  public helper: Helper;
  public helperId: string;
  public profileForm: FormGroup;
  public isEditDisabled: boolean;
  public visibleFields = false;
  public changedPhoto: string | ArrayBuffer;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private helpersService: HelpersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.helperId = this.activatedRoute.snapshot.params.id;
    this.helpersService
      .getHelperById(this.helperId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(helpers => {
        this.patchFormValues(helpers);
        this.helper = helpers;
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
    this.patchFormValues(this.helper);
  }

  public deleteUser() {
    this.helpersService
      .deleteHelperById(this.helperId)
      .subscribe(() => this.router.navigate(['users']));
  }

  public changeInfo(): void {
    const helperChange = {
      id: this.helper.id,
      name: this.profileForm.get('name').value,
      surname: this.profileForm.get('surname').value,
      patronymic: this.profileForm.get('patronymic').value,
      birthday: this.profileForm.get('birthday').value,
      rating: this.profileForm.get('rating').value,
      emailID: this.helper.emailID,
      avatar: this.helper.avatar,
      addressID: this.helper.addressID,
      photoPath: this.helper.photoPath
    };
    this.helpersService.updateHelperById(helperChange)
      .subscribe(() => this.onEdit());
  }

  public changeAvatar(event) {

    const fileReader = new FileReader();
    if (event && event.length) {
      fileReader.readAsDataURL(event[0]);
      fileReader.onload = () => {
        this.helper.avatar = event[0];
        this.changedPhoto = fileReader.result;
      };
    } else {
      this.helper.avatar = null;
      this.changedPhoto = null;
    }
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      id: [],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      patronymic: [],
      birthday: ['', Validators.required],
      avatar: [],
      rating: [null, Validators.required],
      addressID: [],
      emailID: [],
      photoPath: []

    });
  }

  private patchFormValues(helper: Helper): void {
    this.profileForm.patchValue({
      id: helper.id,
      name: helper.name,
      surname: helper.surname,
      patronymic: helper.patronymic,
      birthday: helper.birthday,
      rating: helper.rating,
      emailID: helper.emailID,
      avatar: helper.avatar,
      photoPath: helper.photoPath
    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
  }
}
