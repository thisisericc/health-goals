import { TestBed } from '@angular/core/testing';

import { FindTherapistService } from './find-therapist.service';

describe('FindTherapistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindTherapistService = TestBed.get(FindTherapistService);
    expect(service).toBeTruthy();
  });
});
