import { TestBed, inject } from '@angular/core/testing';

import { StudSrvcService } from './stud-srvc.service';

describe('StudSrvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudSrvcService]
    });
  });

  it('should be created', inject([StudSrvcService], (service: StudSrvcService) => {
    expect(service).toBeTruthy();
  }));
});
