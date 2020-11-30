import { TestBed } from '@angular/core/testing';

import { GoodreadsService } from './goodreads.service';

describe('GoodreadsService', () => {
  let service: GoodreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
