import { Component, OnInit } from '@angular/core';
import { SheltersService } from '../shelters-service/shelters.service';

@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styleUrls: ['./shelter-list.component.scss']
})
export class ShelterListComponent implements OnInit {

  constructor(private sheltersService: SheltersService) { }

  ngOnInit() {
    this.sheltersService.getShelters().subscribe(data => {
      console.log(data)
    })
  }

}
