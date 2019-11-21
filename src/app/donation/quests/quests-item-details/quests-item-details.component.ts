import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuestService } from '../services/quest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quest } from '../models/quest.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { Permissions } from 'src/app/shared/permissions/models/permissions.enum';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

@Component({
  selector: 'app-quests-item-details',
  templateUrl: './quests-item-details.component.html',
  styleUrls: ['./quests-item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestsItemDetailsComponent implements OnInit {
  public quest: Quest;
  public questForm: FormGroup;
  public isEditDisabled: boolean;
  private questId: string;
  public permissions = Permissions;

  constructor(
    private questService: QuestService,
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
    this.questId = this.activatedRoute.snapshot.params.id;
    this.getDetails();
  }

  public onBack(): void {
    this.location.back();
  }

  public onExecute(): void {
    if (this.authStateService.checkRoles([Roles.Volunteer])) {
      const data = this.quest;
      data.status = 'Doing';

      this.questService.putNewData(this.questId, data)
        .subscribe(_ => {
          this.notifierService.showNotice(`Quest was taken!`, 'success');
        });
    } else {
      this.notifierService.showNotice('Thank\'s a lot!!! But, please sign in or register as a Volunteer', 'success');
    }
  }

  public onEdit(): void {
    this.toggleForm();
  }

  public onSave(): void {
    this.questService.putNewData(this.questId, this.questForm.value)
      .subscribe(_ => {
        this.notifierService.showNotice(`Quest was edited!`, 'success');
      });
  }

  public onDelete(): void {
    this.questService.deleteQuest(this.questId)
      .subscribe(_ => {
        this.notifierService.showNotice(`Quest was deleted!`, 'success');
        this.router.navigate(['/donation']);
      });
  }

  private getDetails() {
    this.questService.getDetails(this.questId).subscribe(quest => {
      this.quest = quest;
      this.patchFormValues(quest);
    });
  }

  private createForm(): void {
    this.questForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private patchFormValues(quest: Quest): void {
    this.questForm.patchValue({
      name: quest.name,
      description: quest.description,
    });
  }

  private toggleForm(): void {
    this.questForm.enabled
      ? this.questForm.disable()
      : this.questForm.enable();
    this.isEditDisabled = this.questForm.disabled;
  }
}
