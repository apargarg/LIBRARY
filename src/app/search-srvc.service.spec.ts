import { TestBed, inject } from '@angular/core/testing';

import { SearchSrvcService } from './search-srvc.service';

describe('SearchSrvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchSrvcService]
    });
  });

  it('should be created', inject([SearchSrvcService], (service: SearchSrvcService) => {
    expect(service).toBeTruthy();
  }));
});
