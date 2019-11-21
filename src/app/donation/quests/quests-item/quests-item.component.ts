import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quest } from '../models/quest.interface';

@Component({
  selector: 'app-quests-item',
  templateUrl: './quests-item.component.html',
  styleUrls: ['./quests-item.component.scss']
})
export class QuestsItemComponent {
  @Input() quest: Quest;
  @Output() execute: EventEmitter<any> = new EventEmitter<Quest>();

  public onExecute() {
    this.execute.emit(this.quest);
  }
}
