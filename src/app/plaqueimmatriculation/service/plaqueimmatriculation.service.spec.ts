import { TestBed } from '@angular/core/testing';

import { PlaqueimmatriculationService } from './plaqueimmatriculation.service';

describe('PlaqueimmatriculationService', () => {
  let service: PlaqueimmatriculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaqueimmatriculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
