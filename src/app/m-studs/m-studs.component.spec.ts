import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MStudsComponent } from './m-studs.component';

describe('MStudsComponent', () => {
  let component: MStudsComponent;
  let fixture: ComponentFixture<MStudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MStudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MStudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
