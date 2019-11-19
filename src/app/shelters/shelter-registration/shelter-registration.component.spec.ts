import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { Shelter } from '../models/shelter.interface';
import { ShelterRegistrationComponent } from './shelter-registration.component';
import { MatFileUploadModule } from 'mat-file-upload';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SheltersService } from '../shelters-service/shelters.service';

describe('ShelterRegistrationComponent', () => {
  let component: ShelterRegistrationComponent;
  let fixture: ComponentFixture<ShelterRegistrationComponent>;
  let routerSpy: { navigate: jasmine.Spy };
  let mockShelter: Shelter;
  let sheltersService: SheltersService;
  let sheltersServiceSpy: { registerShelter: jasmine.Spy };

  beforeEach(() => {
    mockShelter = {
      id: 53, name: 'Ромашка', adressID: 114, rating: 11.0, children: 1,
      representative: {id: 54, name: 'Олег', surname: 'Петренко', patronymic: 'Дмитреевич', childrenHouseID: 53},
      address: {id: 114, country: 'Украина', region: 'Днепропетровская', city: 'Днепр', street: 'Артема', house: '250'}
    };
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    sheltersServiceSpy = jasmine.createSpyObj('sheltersService', ['registerShelter']);

    TestBed.configureTestingModule({
      declarations: [ShelterRegistrationComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        MatFileUploadModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: SheltersService, useValue: sheltersServiceSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShelterRegistrationComponent);
    sheltersService = fixture.debugElement.injector.get(SheltersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call gotoMainPage method and tell router to navigate', () => {
    component.gotoMainPage();
    const navArgs = routerSpy.navigate.calls.first().args[0];
    component.gotoMainPage();
    expect(navArgs).toEqual(['/']);
  });

  it('should call onSelectedFilesChanged method', () => {
    const testValue = null;
    const obj = {target: {files: [testValue]}};
    component.onSelectedFilesChanged(obj);
    expect((component as any).file).toEqual(testValue);
  });

  it('should call submit data on sheltersService', () => {
    const formName = {
      name: 'name',
      country: 'country',
      region: 'region',
      city: 'city',
      street: 'street',
      house: 'house',
      rating: 'rating'
    };

    sheltersServiceSpy.registerShelter.and.returnValue(of(mockShelter));
    component.form.controls[formName.name].setValue('California');
    component.form.controls[formName.country].setValue('California');
    component.form.controls[formName.region].setValue('California');
    component.form.controls[formName.city].setValue('California');
    component.form.controls[formName.street].setValue('California');
    component.form.controls[formName.house].setValue('California 23');
    component.form.controls[formName.rating].setValue('23');
    component.submit();
    const formData = {
      name: 'California',
      country: 'California',
      region: 'California',
      city: 'California',
      street: 'California',
      house: 'California 23',
      rating: '23'
    };
    expect(sheltersServiceSpy.registerShelter).toHaveBeenCalledWith(formData, (component as any).file);
  });
});
