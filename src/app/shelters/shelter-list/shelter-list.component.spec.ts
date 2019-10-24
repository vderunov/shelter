import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterListComponent } from './shelter-list.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { ShelterCardComponent } from '../shelter-card/shelter-card.component';

xdescribe('ShelterListComponent', () => {
  let component: ShelterListComponent;
  let fixture: ComponentFixture<ShelterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterListComponent, ShelterCardComponent],
      imports: [
        RouterTestingModule,
        MatGridListModule,
        MatCardModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
