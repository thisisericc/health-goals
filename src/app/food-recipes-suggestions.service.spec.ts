import { TestBed } from '@angular/core/testing';

import { FoodRecipesSuggestionsService } from './food-recipes-suggestions.service';

describe('FoodRecipesSuggestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodRecipesSuggestionsService = TestBed.get(FoodRecipesSuggestionsService);
    expect(service).toBeTruthy();
  });
});
