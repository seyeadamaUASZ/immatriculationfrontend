import { TestBed } from '@angular/core/testing';

import { FichierService } from './fichier.service';

describe('FichierServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FichierService = TestBed.get(FichierService);
    expect(service).toBeTruthy();
  });
});
