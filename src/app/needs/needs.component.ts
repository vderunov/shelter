import { Component, OnInit } from '@angular/core';
import { Need } from '../shared/models/need.model';
import { HttpService} from '../shared/services/http.service';

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

  needs: Need

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data: Need) => this.needs = data);
  }
}

// export class NeedsComponent implements OnInit {
//   title1 = 'List of needs';
//   title2 = 'List of quests';

//   needs: Observable<Need[]>;

//   constructor(private httpService: HttpService) { }

//   ngOnInit() {
//     this.httpService.getData();
//   }
// }
