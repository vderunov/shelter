import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterListComponent } from './shelter-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { ShelterCardComponent } from '../shelter-card/shelter-card.component';
import { SearchModule } from 'src/app/search/search.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheltersService } from '../shelters-service/shelters.service';
import { of } from 'rxjs';
import { Shelter } from '../models/shelter.interface';
import { MatProgressSpinnerModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ShelterListComponent', () => {
  let component: ShelterListComponent;
  let fixture: ComponentFixture<ShelterListComponent>;
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
      }
    };

    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ShelterListComponent, ShelterCardComponent],
      imports: [
        RouterTestingModule,
        MatGridListModule,
        MatCardModule,
        SearchModule,
        NoopAnimationsModule,
        MatProgressSpinnerModule
      ],
      providers: [ {provide: SheltersService, useValue: sheltersServiceStub } ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShelterListComponent);
    component = fixture.componentInstance;
    sheltersService = fixture.debugElement.injector.get(SheltersService);
    fixture.detectChanges();
  });

  it('should create component ShelterList', () => {
    expect(component).toBeTruthy();
  });

  describe('Method onSearch', () => {

    it('sends search params to sheltersService', (done: DoneFn) => {
      spyOn(sheltersService, 'getShelters').and.returnValue(of(mockShelters));

      component.onSearch('searchValue');
      component.shelters$.subscribe((shelter: Shelter[]) => {
        expect(shelter).toEqual(mockShelters);
        done();
      });
    });
  });
});
