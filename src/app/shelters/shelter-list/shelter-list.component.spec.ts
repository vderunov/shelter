import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterListComponent } from './shelter-list.component';

describe('ShelterListComponent', () => {
  let component: ShelterListComponent;
  let fixture: ComponentFixture<ShelterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
