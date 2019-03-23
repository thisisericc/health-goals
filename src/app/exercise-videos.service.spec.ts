import { TestBed } from '@angular/core/testing';

import { ExerciseVideosService } from './exercise-videos.service';

describe('ExerciseVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseVideosService = TestBed.get(ExerciseVideosService);
    expect(service).toBeTruthy();
  });
});
