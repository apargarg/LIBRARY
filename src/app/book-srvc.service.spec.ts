import { TestBed, inject } from '@angular/core/testing';

import { BookSrvcService } from './book-srvc.service';

describe('BookSrvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookSrvcService]
    });
  });

  it('should be created', inject([BookSrvcService], (service: BookSrvcService) => {
    expect(service).toBeTruthy();
  }));
});
