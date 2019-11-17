import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuestService } from '../services/quest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quest } from '../models/quest.interface';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';

@Component({
  selector: 'app-quests-item-details',
  templateUrl: './quests-item-details.component.html',
  styleUrls: ['./quests-item-details.component.scss']
})
export class QuestsItemDetailsComponent implements OnInit {
  public quest: Quest;
  public questForm: FormGroup;
  public isEditDisabled: boolean;
  private questId: string;

  constructor(
    private questService: QuestService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private notifierService: NotifierService,
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
    console.log('change status by put request + notification');
  }

  public onEdit(): void {
    this.toggleForm();
  }

  private getDetails() {
    this.questService.getDetails(this.questId).subscribe(quest => {
      this.quest = quest;
      this.patchFormValues(quest);
    });
  }

  private createForm(): void {
    this.questForm = this.fb.group({
      quest: ['', Validators.required],
      details: ['', Validators.required]
    });
  }

  private patchFormValues(quest: Quest): void {
    this.questForm.patchValue({
      quest: quest.itemName,
      details: quest.itemDescription,
    });
  }

  private toggleForm(): void {
    this.questForm.enabled
      ? this.questForm.disable()
      : this.questForm.enable();
    this.isEditDisabled = this.questForm.disabled;
  }

}
