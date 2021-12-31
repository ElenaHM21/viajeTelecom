import { TestBed } from '@angular/core/testing';

import { ManchaService } from './mancha.service';

describe('ManchaService', () => {
  let service: ManchaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManchaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
