import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerItemComponent } from './manager-item.component';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManagerItemComponent', () => {
  let component: ManagerItemComponent;
  let fixture: ComponentFixture<ManagerItemComponent>;
  const mockManager = {
    id: 3,
    avatar: null,
    name: 'Tomas',
    surname: 'Timonov',
    patronymic: 'Stivenovich',
    birthday: '1999-11-30T00:00:00',
    rating: 3,
    emailID: 0,
    childrenHouseID: 5,
    photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer2.jpg',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerItemComponent],
      imports: [RouterTestingModule, MatCardModule]
    });

    fixture = TestBed.createComponent(ManagerItemComponent);
    component = fixture.componentInstance;
    component.manager = mockManager;
    fixture.detectChanges();
  });

  it('should create component manager item', () => {
    expect(component).toBeTruthy();
  });

});




