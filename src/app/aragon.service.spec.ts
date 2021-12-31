import { TestBed } from '@angular/core/testing';

import { AragonService } from './aragon.service';

describe('AragonService', () => {
  let service: AragonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
