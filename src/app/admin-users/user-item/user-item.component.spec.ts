import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemComponent } from './user-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';

xdescribe('HelperItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;
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
      declarations: [UserItemComponent],
      imports: [RouterTestingModule, MatCardModule]
    });

    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  xit('should create component helper item',  (done: DoneFn) => {
    expect(component).toBeTruthy();
    done();
  });

});
