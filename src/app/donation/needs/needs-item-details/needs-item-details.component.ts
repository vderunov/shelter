import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NeedService } from '../services/need.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Need } from '../models/need.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';

@Component({
  selector: 'app-needs-item-details',
  templateUrl: './needs-item-details.component.html',
  styleUrls: ['./needs-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsItemDetailsComponent implements OnInit {
  public need: Need;
  public needForm: FormGroup;
  public isEditDisabled: boolean;
  private needId: string;
  public permissions = Permissions;

  constructor(
    private needService: NeedService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private notifierService: NotifierService,
  ) { }

  public ngOnInit(): void {
    this.createForm();
    this.toggleForm();
    this.needId = this.activatedRoute.snapshot.params.id;
    this.getDetails();
  }

  public onBack(): void {
    this.location.back();
  }

  public onDonate(): void {
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onSave(): void {
    this.toggleForm();
    const newData = this.needForm.value;

    this.needService.putNeedData(this.needId, newData)
    .subscribe(_ => {
      this.notifierService.showNotice('Changes have been saved!', 'success');
    });
  }

  public onDelete(): void {
    this.needService.deleteNeed(this.needId)
      .subscribe(_ => {
        this.notifierService.showNotice(`Need ${this.need.itemName} was deleted!`, 'success');
        this.router.navigate(['/donation']);
      });
  }

  private getDetails() {
    this.needService.getDetails(this.needId).subscribe(need => {
      this.need = need;
      this.patchFormValues(need);
    });
  }

  private createForm(): void {
    this.needForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private patchFormValues(need: Need): void {
    this.needForm.patchValue({
      name: need.itemName,
      description: need.itemDescription,
    });
  }

  private toggleForm(): void {
    this.needForm.enabled
      ? this.needForm.disable()
      : this.needForm.enable();
    this.isEditDisabled = this.needForm.disabled;
  }
}
