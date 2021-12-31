import { TestBed } from '@angular/core/testing';

import { PaisVascoService } from './pais-vasco.service';

describe('PaisVascoService', () => {
  let service: PaisVascoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisVascoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
