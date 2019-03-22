import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from '../food-recipes.service';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.css']
})
export class FoodRecipesComponent implements OnInit {

  searchResults: any;

  constructor(
    private foodRecipesService: FoodRecipesService
  ) { }

  ngOnInit() {
  }

  recipesQuery(mealQuery: string) {
    this.foodRecipesService.getFoodRecipes(mealQuery).subscribe(
      obj => {
      const str = JSON.stringify(obj);
      const output = [];
      str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
        // console.log(recipe);
        // console.log(recipe.substring(recipe.indexOf('\"image\"') + 11, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 11)));
        output.push(recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9)));
      });
      this.searchResults = output;
    });
  }
}
