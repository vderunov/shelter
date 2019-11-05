import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsItemDetailsComponent } from './needs-item-details.component';

xdescribe('NeedsItemDetailsComponent', () => {
  let component: NeedsItemDetailsComponent;
  let fixture: ComponentFixture<NeedsItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
