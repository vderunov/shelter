import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Quest } from '../models/quest.interface';
import { QuestService } from '../services/quest.service';
import { Observable } from 'rxjs';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Router } from '@angular/router';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

@Component({
  selector: 'app-quests-list',
  templateUrl: './quests-list.component.html',
  styleUrls: ['./quests-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestsListComponent implements OnInit {
  public quests$: Observable<Quest[]>;

  constructor(
    private questService: QuestService,
    private notifierService: NotifierService,
    private authStateService: AuthStateService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.quests$ = this.questService.getQuests();
  }

  public trackById(index: number, quest: Quest): number | string {
    return quest.id;
  }

  public onSearch(searchValue: string): void {
    this.quests$ = this.questService.getQuests({ forSearch: searchValue });
  }

  public onExecute(value: Quest): void {
    if (this.authStateService.checkRoles([Roles.Volunteer])) {
      value.status = 'Doing';
      this.questService.putNewData(value.id, value)
        .subscribe(_ => {
          this.notifierService.showNotice('Quest was taken!', 'success');
        });
    } else {
      this.notifierService.showNotice('Thank\'s a lot!!! But, please sign in or register as a Volunteer', 'success');
    }
  }
}
