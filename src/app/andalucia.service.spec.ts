import { TestBed } from '@angular/core/testing';

import { AndaluciaService } from './andalucia.service';

describe('AndaluciaService', () => {
  let service: AndaluciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndaluciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
