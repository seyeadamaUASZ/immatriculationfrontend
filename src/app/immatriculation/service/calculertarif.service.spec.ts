import { TestBed } from '@angular/core/testing';

import { CalculertarifService } from './calculertarif.service';

describe('CalculertarifService', () => {
  let service: CalculertarifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculertarifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
