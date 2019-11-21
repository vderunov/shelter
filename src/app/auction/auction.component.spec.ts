import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionComponent } from './auction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PermissionsModule } from 'src/app/shared/permissions/permissions.module';
import { CookieService } from 'ngx-cookie-service';

describe('AuctionComponent', () => {
  let component: AuctionComponent;
  let fixture: ComponentFixture<AuctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        PermissionsModule
      ],
      providers: [
        CookieService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create auction component', () => {
    expect(component).toBeTruthy();
  });
});
