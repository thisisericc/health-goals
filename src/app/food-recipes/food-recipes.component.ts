import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from '../food-recipes.service';
import { FoodRecipes } from '../food-recipes';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.css'],
  providers: [MessageService]
})
export class FoodRecipesComponent implements OnInit {

  mealQuery: any;
  searchResults: any;
  error = null;

  constructor(
    private foodRecipesService: FoodRecipesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  recipesQuery(mealQuery: string) {
    this.foodRecipesService.getFoodRecipes(mealQuery).subscribe(
      obj => {
      const str = JSON.stringify(obj);
      const output: FoodRecipes[] = [];
      str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {

        const fR = {} as FoodRecipes;

        fR.recipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));

        fR.imageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));

        fR.articleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));

        fR.dietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],',
        recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');

        fR.healthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],',
        recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');

        // console.log(fR.dietLabels);

        fR.calories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11,
        recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';

        fR.servings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',',
        recipe.indexOf('\"yield\"') + 8)))) + '';

        const totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},',
        recipe.indexOf('\"totalDaily\"') + 14));
        fR.totalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11,
        totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';

        fR.calories = Math.round(parseFloat(fR.calories) / parseFloat(fR.servings)) + '';
        fR.totalDaily = Math.round(parseFloat(fR.totalDaily) / parseFloat(fR.servings)) + '';

        output.push(fR);
      });
      this.searchResults = output;
    },
    error => {
      console.error(error);
      this.error = error;
      this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
    });
  }
}
