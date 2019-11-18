import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterCardComponent } from './shelter-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { Shelter } from '../models/shelter.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShelterCardComponent', () => {
  let component: ShelterCardComponent;
  let fixture: ComponentFixture<ShelterCardComponent>;
  let mockShelter: Shelter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShelterCardComponent],
      imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShelterCardComponent);
    component = fixture.componentInstance;

    mockShelter = {
      id: 1,
      name: 'Ромашка111',
      adressID: 1,
      rating: 11.0,
      avatar: null,
      locationID: null,
      photoPath: 'https://familynetserver.azurewebsites.net/ChildrenHouses/Ромашка637093345351563349.jpg'
    };
    component.shelter = mockShelter;

    fixture.detectChanges();
  });

  it('should create component ShelterCard', () => {
    expect(component).toBeTruthy();
  });

  describe('Method selectCard', () => {
    it('should send property id of argument into variable selectedId of component', () => {
      component.selectCard(mockShelter);
      expect(component.selectedId).toBe(mockShelter.id);
    });
  });
});
