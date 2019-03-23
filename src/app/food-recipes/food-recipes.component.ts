
import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from '../food-recipes.service';
import { FoodRecipes } from '../food-recipes';

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

<<<<<<< HEAD
}
=======
  recipesQuery(mealQuery: string) {
    this.foodRecipesService.getFoodRecipes(mealQuery).subscribe(
      obj => {
      const str = JSON.stringify(obj);
      const output: FoodRecipes[] = [];
      str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {

        const fR = {} as FoodRecipes;

        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));
        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));
        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],',
        recipe.indexOf('\"dietLabels\"') + 14)).split('\", \"');
        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],',
        recipe.indexOf('\"healthLabels\"') + 16)).split('\", \"');
        // console.log(fR.dietLabels);

        output.push(fR);
      });
      this.searchResults = output;
    });
  }
}
>>>>>>> f3099bb4f50eb91fdfe99da8bcabbef28e2f9de2
