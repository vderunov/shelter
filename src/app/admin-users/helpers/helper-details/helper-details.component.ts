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
  private unsubscribe: Subject<void> = new Subject();
  constructor(
    private helpersService: HelpersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  ngOnDestroy() {
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

  public changeInfo() {
    this.helpersService
      .updateHelperById(this.profileForm.value, this.helperId)
      .subscribe(() => this.onEdit());
  }

  private createForm(): void {
    this.profileForm = this.fb.group({
      name: [null, Validators.required],
      surname: [],
      patronymic: [],
      birthday: [],
      avatar: [],
      photoPath: [],
      rating: [],
    });
  }

  private patchFormValues(helper: Helper): void {
    this.profileForm.patchValue({
      name: helper.name,
      surname: helper.surname,
      patronymic: helper.patronymic,
      birthday: helper.birthday,
      avatar: helper.avatar,
      photoPath: helper.photoPath,
      rating: helper.rating,
    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
  }

}
