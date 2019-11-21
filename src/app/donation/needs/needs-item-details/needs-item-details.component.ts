import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NeedService } from '../services/need.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Need } from '../models/need.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

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
    private authStateService: AuthStateService
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
    if (this.authStateService.checkRoles([Roles.Volunteer])) {
      const data = this.need;
      data.status = 'Taken';
      data.lastDateWhenStatusChanged = new Date().toISOString();

      this.needService.putStatus(this.needId, data)
        .subscribe(_ => {
          this.notifierService.showNotice(`Need was taken!`, 'success');
        });
    } else {
      this.notifierService.showNotice('Thank\'s a lot!!! But, please sign in or register as a Volunteer', 'success');
    }
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onSave(): void {
    this.toggleForm();
    this.needService.putNeedData(this.need.donationItemID, {...this.needForm.value})
    .subscribe(_ => {
      this.notifierService.showNotice('Changes have been saved!', 'success');
    });
  }

  public onDelete(): void {
    this.needService.deleteNeed(this.needId)
      .subscribe(_ => {
        this.notifierService.showNotice(`Need was deleted!`, 'success');
        this.router.navigate(['/donation']);
      });
  }

  private getDetails(): void {
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
