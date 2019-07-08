import { TestBed } from '@angular/core/testing';

import { ApprenantService } from './apprenant.service';

describe('ApprenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprenantService = TestBed.get(ApprenantService);
    expect(service).toBeTruthy();
  });
});
