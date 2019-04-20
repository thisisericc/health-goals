import { TestBed } from '@angular/core/testing';

import { FoodRecipesService } from './food-recipes.service';

describe('FoodRecipesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodRecipesService = TestBed.get(FoodRecipesService);
    expect(service).toBeTruthy();
  });
});