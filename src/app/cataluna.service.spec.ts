import { TestBed } from '@angular/core/testing';

import { CatalunaService } from './cataluna.service';

describe('CatalunaService', () => {
  let service: CatalunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
