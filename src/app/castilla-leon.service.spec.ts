import { TestBed } from '@angular/core/testing';

import { CastillaLeonService } from './castilla-leon.service';

describe('CastillaLeonService', () => {
  let service: CastillaLeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastillaLeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
