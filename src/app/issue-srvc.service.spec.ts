import { TestBed, inject } from '@angular/core/testing';

import { IssueSrvcService } from './issue-srvc.service';

describe('IssueSrvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueSrvcService]
    });
  });

  it('should be created', inject([IssueSrvcService], (service: IssueSrvcService) => {
    expect(service).toBeTruthy();
  }));
});
