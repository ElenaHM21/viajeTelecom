import { TestBed } from '@angular/core/testing';

import { CantabriaService } from './cantabria.service';

describe('CantabriaService', () => {
  let service: CantabriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantabriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
