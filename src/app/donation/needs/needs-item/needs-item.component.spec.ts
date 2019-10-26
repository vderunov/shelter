import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsItemComponent } from './needs-item.component';

xdescribe('NeedsItemComponent', () => {
  let component: NeedsItemComponent;
  let fixture: ComponentFixture<NeedsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
