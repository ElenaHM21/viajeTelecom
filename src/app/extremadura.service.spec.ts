import { TestBed } from '@angular/core/testing';

import { ExtremaduraService } from './extremadura.service';

describe('ExtremaduraService', () => {
  let service: ExtremaduraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtremaduraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
