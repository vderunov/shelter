import { Component, Input } from '@angular/core';
import { Quest } from '../models/quest.interface';

@Component({
  selector: 'app-quests-item',
  templateUrl: './quests-item.component.html',
  styleUrls: ['./quests-item.component.scss']
})
export class QuestsItemComponent {
  @Input() quest: Quest;

<<<<<<< HEAD
  public onExecute() {
  }
=======
  public onExecute() { }
>>>>>>> 0803164bd5c06cfb8750e5c221a32c4ac789e23e
}
