import { TestBed } from '@angular/core/testing';

import { NoNavService } from './no-nav.service';

describe('NoNavService', () => {
  let service: NoNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
