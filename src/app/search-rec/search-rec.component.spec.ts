import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecComponent } from './search-rec.component';

describe('SearchRecComponent', () => {
  let component: SearchRecComponent;
  let fixture: ComponentFixture<SearchRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
