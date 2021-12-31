import { TestBed } from '@angular/core/testing';

import { CanariasService } from './canarias.service';

describe('CanariasService', () => {
  let service: CanariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
