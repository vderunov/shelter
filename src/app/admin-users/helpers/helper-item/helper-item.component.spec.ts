import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelperItemComponent } from './helper-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';

describe('HelperItemComponent', () => {
  let component: HelperItemComponent;
  let fixture: ComponentFixture<HelperItemComponent>;
  const mockHelper = {
    id: 5,
    name: 'Марина',
    surname: 'Кричич',
    patronymic: 'Михайловна',
    birthday: '1954-12-30T00:00:00',
    rating: 5,
    avatar: null,
    addressID: 1,
    emailID: 0,
    photoPath: 'https://familynetserver.azurewebsites.net/avatars/seddata_volunteer1.jpg'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelperItemComponent],
      imports: [RouterTestingModule, MatCardModule]
    });

    fixture = TestBed.createComponent(HelperItemComponent);
    component = fixture.componentInstance;
    component.helper = mockHelper;
    fixture.detectChanges();
  });

  it('should create component helper item', () => {
    expect(component).toBeTruthy();
  });

});
