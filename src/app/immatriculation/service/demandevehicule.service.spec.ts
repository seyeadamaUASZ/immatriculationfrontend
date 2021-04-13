import { TestBed } from '@angular/core/testing';

import { DemandevehiculeService } from './demandevehicule.service';

describe('DemandevehiculeService', () => {
  let service: DemandevehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandevehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
