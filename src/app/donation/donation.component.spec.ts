import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule, MatDialogModule, MatTabsModule, MatCardModule, MatButtonModule } from '@angular/material';
import { DonationComponent } from './donation.component';
import { NeedsComponent } from './needs/needs-list/needs.component';
import { NeedsItemComponent } from './needs/needs-item/needs-item.component';
import { QuestsListComponent } from './quests/quests-list/quests-list.component';
import { QuestsItemComponent } from './quests/quests-item/quests-item.component';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';

xdescribe('DonationComponent', () => {
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationComponent, NeedsComponent, QuestsListComponent, NeedsItemComponent, QuestsItemComponent ],
      imports: [MatListModule, MatDialogModule, MatTabsModule, MatCardModule, MatButtonModule, SearchModule, RouterModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
