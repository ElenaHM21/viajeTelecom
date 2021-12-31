import { TestBed } from '@angular/core/testing';

import { RiojaService } from './rioja.service';

describe('RiojaService', () => {
  let service: RiojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
