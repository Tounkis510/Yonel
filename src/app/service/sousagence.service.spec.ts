import { TestBed } from '@angular/core/testing';

import { SousagenceService } from './sousagence.service';

describe('SousagenceService', () => {
  let service: SousagenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousagenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
