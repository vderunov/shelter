import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterCardComponent } from './shelter-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShelterListComponent } from '../shelter-list/shelter-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

xdescribe('ShelterCardComponent', () => {
  let component: ShelterCardComponent;
  let fixture: ComponentFixture<ShelterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterListComponent, ShelterCardComponent],
      imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
