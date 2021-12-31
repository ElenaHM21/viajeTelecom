import { TestBed } from '@angular/core/testing';

import { AsturiasService } from './asturias.service';

describe('AsturiasService', () => {
  let service: AsturiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsturiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
