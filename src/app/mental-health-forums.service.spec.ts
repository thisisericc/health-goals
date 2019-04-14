import { TestBed } from '@angular/core/testing';

import { MentalHealthForumsService } from './mental-health-forums.service';

describe('MentalHealthForumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentalHealthForumsService = TestBed.get(MentalHealthForumsService);
    expect(service).toBeTruthy();
  });
});
