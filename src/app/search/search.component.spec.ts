import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.searchValue, 'emit');
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on call of function Search with same argument', () => {
    component.search('search value');
    expect(component.searchValue.emit).toHaveBeenCalledWith('search value');
  });
});
