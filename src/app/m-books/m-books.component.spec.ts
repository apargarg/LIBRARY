import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBooksComponent } from './m-books.component';

describe('MBooksComponent', () => {
  let component: MBooksComponent;
  let fixture: ComponentFixture<MBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
