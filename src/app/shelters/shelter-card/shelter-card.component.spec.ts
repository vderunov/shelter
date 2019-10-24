import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterCardComponent } from './shelter-card.component';
import { SheltersService } from '../shelters-service/shelters.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShelterListComponent } from '../shelter-list/shelter-list.component';

describe('ShelterCardComponent', () => {
  let component: ShelterCardComponent;
  let fixture: ComponentFixture<ShelterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterListComponent, ShelterCardComponent],
      imports: [
        MatGridListModule,
        HttpClientModule,
        MatCardModule
      ],
      providers: [SheltersService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
