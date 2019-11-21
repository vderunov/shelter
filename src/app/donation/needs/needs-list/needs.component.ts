import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Need } from '../models/need.interface';
import { NeedService } from '../services/need.service';
import { Observable } from 'rxjs';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';
import { AuthStateService } from 'src/app/shared/services/state/auth-state.service';
import { Router } from '@angular/router';
import { Roles } from 'src/app/shared/permissions/models/roles.enum';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeedsComponent implements OnInit {
  public needs$: Observable<Need[]>;

  constructor(
    private needService: NeedService,
    private notifierService: NotifierService,
    private authStateService: AuthStateService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.needs$ = this.needService.getNeeds();
  }

  public trackById(index: number, item: Need): number | string {
    return item.donationItemID;
  }

  public onSearch(searchValue: string): void {
    this.needs$ = this.needService.getNeeds({ forSearch: searchValue });
  }

  public onDonate(value: Need): void {
    if (this.authStateService.checkRoles([Roles.Volunteer])) {
      value.status = 'Taken';
      value.lastDateWhenStatusChanged = new Date().toISOString();
      this.needService.putStatus(value.id, value)
        .subscribe(_ => {
          this.notifierService.showNotice('Need was taken!', 'success');
        });
    } else {
      this.notifierService.showNotice('Thank\'s a lot!!! But, please sign in or register as a Volunteer', 'success');
    }
  }
}
