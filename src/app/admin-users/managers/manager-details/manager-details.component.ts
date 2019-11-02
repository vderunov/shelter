import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  private unsubscribe: Subject<void> = new Subject();
  public manager: Manager;
  public managerId: string;
  public profileForm: FormGroup;
  public isEditDisabled: boolean;
  public visibleFields = false;
  
  constructor(
    private managersService: ManagersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
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
        return this.manager;
      });
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

  private patchFormValues(manager: Manager): void {
    this.profileForm.patchValue({
      name: manager.name,
      surname: manager.surname,
      patronymic: manager.patronymic,
      birthday: manager.birthday,
      avatar: manager.avatar,
      photoPath: manager.photoPath,
      rating: manager.rating,
    });
  }

  private toggleForm() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
    this.isEditDisabled = this.profileForm.disabled;
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
    this.patchFormValues(this.manager);
  }

  public deleteUser() {
    this.managersService
      .deleteManager(this.managerId)
      .subscribe();
  }
  public changeInfo() {
    this.managersService
      .updateManager(this.profileForm.value, this.managerId)
      .subscribe();
  }
}
