import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssRetComponent } from './iss-ret.component';

describe('IssRetComponent', () => {
  let component: IssRetComponent;
  let fixture: ComponentFixture<IssRetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssRetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssRetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
