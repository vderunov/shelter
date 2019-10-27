import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NeedsComponent } from './needs.component';

xdescribe('NeedsComponent', () => {
  let component: NeedsComponent;
  let fixture: ComponentFixture<NeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
