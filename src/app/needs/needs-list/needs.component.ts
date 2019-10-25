import { Component, OnInit } from '@angular/core';
import { Need } from '../models/need.interface';
import { HttpService} from '../services/http.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
  providers: [HttpService]
})

export class NeedsComponent implements OnInit {
  title1 = 'List of needs';
  title2 = 'List of quests';

  needs: Observable<Need[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.needs = this.httpService.getNeeds();
  }
}
