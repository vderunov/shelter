import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersMapComponent } from './shelters-map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SheltersService } from '../shelters-service/shelters.service';
import { of } from 'rxjs';
import { Shelter } from '../models/shelter.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('SheltersMapComponent', () => {
  let component: SheltersMapComponent;
  let fixture: ComponentFixture<SheltersMapComponent>;
  let sheltersServiceStub: Partial<SheltersService>;
  let sheltersService: SheltersService;
  let mockShelters: Shelter[];

  beforeEach(() => {
    mockShelters = [
      {
        id: 53, name: 'Ромашка', adressID: 114, rating: 11.0, children: 1,
        representative: { id: 54, name: 'Олег', surname: 'Петренко', patronymic: 'Дмитреевич', childrenHouseID: 53 },
        address: { id: 114, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Артема', house: '250' }
      },
      {
        id: 54, name: 'Лопухи', adressID: 115, rating: 12, children: 1,
        representative: { id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', childrenHouseID: 54 },
        address: { id: 115, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Гагарина', house: '122' }
      }];
    sheltersServiceStub = {
      getShelters(paramObj: object = {}) {
        return of(mockShelters);
      },
      getLocationEveryShelters() {
        return of({zoom: 12, coords: []});
      }
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ SheltersMapComponent ],
      providers: [
        { provide: SheltersService, useValue: sheltersServiceStub }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheltersMapComponent);
    component = fixture.componentInstance;
    sheltersService = fixture.debugElement.injector.get(SheltersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
