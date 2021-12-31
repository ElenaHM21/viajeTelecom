import { TestBed } from '@angular/core/testing';

import { NavarraService } from './navarra.service';

describe('NavarraService', () => {
  let service: NavarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
