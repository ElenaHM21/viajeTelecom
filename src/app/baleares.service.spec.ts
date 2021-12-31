import { TestBed } from '@angular/core/testing';

import { BalearesService } from './baleares.service';

describe('BalearesService', () => {
  let service: BalearesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalearesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
