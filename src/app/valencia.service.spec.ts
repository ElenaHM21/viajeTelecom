import { TestBed } from '@angular/core/testing';

import { ValenciaService } from './valencia.service';

describe('ValenciaService', () => {
  let service: ValenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
