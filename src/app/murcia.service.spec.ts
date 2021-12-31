import { TestBed } from '@angular/core/testing';

import { MurciaService } from './murcia.service';

describe('MurciaService', () => {
  let service: MurciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MurciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
