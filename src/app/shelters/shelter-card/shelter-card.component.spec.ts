import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterCardComponent } from './shelter-card.component';
import { MatCardModule } from '@angular/material/card';
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
        MatCardModule
      ]
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
