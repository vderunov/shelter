import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Quest } from '../models/quest.interface';
import { QuestService } from '../services/quest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quests-list',
  templateUrl: './quests-list.component.html',
  styleUrls: ['./quests-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestsListComponent implements OnInit {
  public quests$: Observable<Quest[]>;

  constructor(private questService: QuestService) { }

  public ngOnInit() {
    this.quests$ = this.questService.getQuests();
  }

  public trackById(index: number, quest: Quest): number {
    return quest.id;
  }

  public onSearch(searchValue: string): void {
    this.quests$ = this.questService.getQuests({ forSearch: searchValue });
  }
}
