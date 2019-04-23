import { TestBed } from '@angular/core/testing';

import { WeightWatchersService } from './weight-watchers.service';

describe('WeightWatchersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightWatchersService = TestBed.get(WeightWatchersService);
    expect(service).toBeTruthy();
  });
});
