import { TestBed } from '@angular/core/testing';

import { GenerernumimmatService } from './generernumimmat.service';

describe('GenerernumimmatService', () => {
  let service: GenerernumimmatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerernumimmatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
