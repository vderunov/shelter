import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Helper } from '../models/helper.model';
import { HelpersService } from '../services/helper.service';

@Component({
  selector: 'app-helpers-list',
  templateUrl: './helpers-list.component.html',
  styleUrls: ['./helpers-list.component.scss']
})

export class HelpersListComponent implements OnInit {
  public helpers$: Observable<Helper[]>;

  constructor(private helperService: HelpersService) { }

  ngOnInit(): void {
    this.helpers$ = this.helperService.getAllHelpers();
  }

  public trackByHelpers(index: number, user: Helper): number {
    return user.id;
  }

  public onSearch(searchValue: string): void {
    this.helpers$ = this.helperService.getAllHelpers({ name: searchValue });
  }
}
