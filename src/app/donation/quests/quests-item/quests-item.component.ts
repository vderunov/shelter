import { Component, Input } from '@angular/core';
import { Quest } from '../models/quest.interface';

@Component({
  selector: 'app-quests-item',
  templateUrl: './quests-item.component.html',
  styleUrls: ['./quests-item.component.scss']
})
export class QuestsItemComponent {
  @Input() quest: Quest;

  public onExecute() {
    
  }
}
