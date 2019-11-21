import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LotCreatorComponent } from './lot-creator.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuctionService } from '../services/auction.service';
import { of } from 'rxjs';


describe('LotCreatorComponent', () => {
  let component: LotCreatorComponent;
  let fixture: ComponentFixture<LotCreatorComponent>;
  let auctionServiceSpy: { createNewLot: jasmine.Spy, getItems: jasmine.Spy, getChildrenByManager: jasmine.Spy };
  let buff: ArrayBuffer;

  beforeEach(() => {
    auctionServiceSpy = jasmine.createSpyObj('auctionService', ['createNewLot', 'getItems', 'getChildrenByManager']);

    TestBed.configureTestingModule({
      declarations: [ LotCreatorComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        BrowserAnimationsModule
      ],
      providers: [
        CookieService,
        {provide: AuctionService, useValue: auctionServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buff = new ArrayBuffer(16);
    buff[0] = 123456;
    auctionServiceSpy.createNewLot.and.returnValue(of(null));
  });

  it('should create component lot-creator', () => {
    expect(component).toBeTruthy();
  });

  describe('Method setPhoto', () => {
    it('should set file into component var', () => {
      component.setPhoto(buff);
      expect((component as any).lotPhoto).toEqual(123456);
    });
  });

  describe('Method onSubmit', () => {
    it('should send data about new lot to auction service method createNewLot', () => {
      component.setPhoto(buff);
      component.newLotForm.patchValue({
        item: 2,
        child: 11
      });

      component.onSubmit();
      expect((component as any).auctionService.createNewLot).toHaveBeenCalledWith({item: 2, child: 11}, 123456);
    });
  });
});
