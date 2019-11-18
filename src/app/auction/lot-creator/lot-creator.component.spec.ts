import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotCreatorComponent } from './lot-creator.component';

describe('LotCreatorComponent', () => {
  let component: LotCreatorComponent;
  let fixture: ComponentFixture<LotCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
