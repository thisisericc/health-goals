import { TestBed } from '@angular/core/testing';

import { ExercisevideosService } from './exercisevideos.service';

describe('ExercisevideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercisevideosService = TestBed.get(ExercisevideosService);
    expect(service).toBeTruthy();
  });
});
