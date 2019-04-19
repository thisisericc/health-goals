import { TestBed } from '@angular/core/testing';

import { FindInstructorsService } from './find-instructors.service';

describe('FindInstructorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindInstructorsService = TestBed.get(FindInstructorsService);
    expect(service).toBeTruthy();
  });
});
