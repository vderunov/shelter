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
      declarations: [ SearchComponent ],
      imports:[ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should emit on submit searchForm', () => {
    spyOn(component.onSearch, 'emit');
    const nativeElement = fixture.nativeElement;
    const searchForm = nativeElement.querySelector('form');
    const searchInput = nativeElement.querySelector('input');
    searchForm.dispatchEvent(new Event('submit'));

    expect(component.onSearch.emit).toHaveBeenCalledWith(searchInput.value);
 });

});
