import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterCardDetailsComponent } from './shelter-card-details.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PermissionsModule } from 'src/app/shared/permissions/permissions.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Shelter } from '../models/shelter.interface';
import { AddressShelter } from '../models/address-shelter.interface';
import { SheltersService } from '../shelters-service/shelters.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('ShelterCardDetailsComponent', () => {
  let component: ShelterCardDetailsComponent;
  let fixture: ComponentFixture<ShelterCardDetailsComponent>;
  let sheltersServiceStub: Partial<SheltersService>;
  let sheltersService: SheltersService;
  let mockShelter: Shelter;
  let mockChangedShelter: [Shelter, AddressShelter];
  let mockAddress: AddressShelter;

  beforeEach(() => {
    mockShelter = {
      id: 54, name: 'Лопухи', adressID: 115, rating: 12, children: 1,
      representative: { id: 55, name: 'Марина', surname: 'Кричич', patronymic: 'Михайловна', childrenHouseID: 54 },
      address: { id: 115, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Гагарина', house: '122' }
    };
    mockAddress = {
      id: 77,
      country: 'UA',
      region: 'Kiiv',
      city: 'Kiiv',
      street: 'centralna',
      house: '51'
    };
    mockChangedShelter = [
      mockShelter,
      mockAddress];

    sheltersServiceStub = {
      getDetails(id: string = '') {
        return of(mockShelter);
      },
      putShelterDetails(changeData) {
        return of(mockChangedShelter);
      },
      deleteShelter() {
        return of(null);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ShelterCardDetailsComponent],
      imports: [
        MatFileUploadModule,
        PermissionsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [
        CookieService,
        { provide: SheltersService, useValue: sheltersServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ShelterCardDetailsComponent);
    component = fixture.componentInstance;
    sheltersService = fixture.debugElement.injector.get(SheltersService);
    fixture.detectChanges();
  });

  it('should create component ShelterCardDetails', () => {
    expect(component).toBeTruthy();
  });

  describe('Method onSubmit', () => {
    it('should send edited data to server', () => {
      spyOn(sheltersService, 'putShelterDetails').and.returnValue(of(mockChangedShelter));
      const shelterServiceName = 'sheltersService';
      const shelterChange = {
        name: component.profileForm.get('name').value,
        rating: component.shelter.rating,
        adressID: component.shelter.adressID,
        avatar: component.shelter.avatar,
        locationID: component.shelter.locationID
      };

      let addressChange = { ...component.profileForm.get('address').value };
      const isChangeAddress = Object.entries(addressChange).every(([key, value]) => component.shelter.address[key] === value);
      if (isChangeAddress) {
        addressChange = null;
      }

      const changeData = {
        id: component.shelter.id,
        addressID: component.shelter.adressID,
        address: addressChange,
        shelter: shelterChange,
      };

      component.onSubmit();
      expect(component[shelterServiceName].putShelterDetails).toHaveBeenCalledWith(changeData);
    });
  });

  describe('Method onEdit', () => {
    it('should toggle form', () => {
      const toggleFormMethodName = 'toggleForm';
      spyOn(component as any, toggleFormMethodName);

      component.onEdit();
      expect(component[toggleFormMethodName]).toHaveBeenCalled();
    });
  });

  describe('Method onDelete', () => {
    it('should send data to deleteShelter method of sheltersService', () => {
      spyOn(sheltersService, 'deleteShelter').and.returnValue(of(null));
      const shelterServiceName = 'sheltersService';

      component.onDelete();
      expect(component[shelterServiceName].deleteShelter).toHaveBeenCalledWith(component.shelter);
    });
  });

  describe('Method onReset()', () => {
    it('should return previos data to form', () => {
      spyOn(component as any, 'patchFormValues');
      const patchFormValuesMethodName = 'patchFormValues';

      component.onReset();
      expect(component[patchFormValuesMethodName]).toHaveBeenCalledWith(component.shelter);
    });
    it('should toggle form', () => {
      spyOn(component, 'onEdit');

      component.onReset();
      expect(component.onEdit).toHaveBeenCalled();
    });
  });

  describe('Method onUploadClicked', () => {
    it('should toggle form', () => {
      const toggleFormMethodName = 'toggleForm';
      const event = 'someEvent';
      spyOn(component as any, toggleFormMethodName);

      component.onUploadClicked(event);
      expect(component[toggleFormMethodName]).toHaveBeenCalled();
    });
  });
});
