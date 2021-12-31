import { TestBed } from '@angular/core/testing';

import { GaliciaService } from './galicia.service';

describe('GaliciaService', () => {
  let service: GaliciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaliciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
