import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from '../food-recipes.service';
import { FoodRecipes } from '../food-recipes';
import { MessageService } from 'primeng/api';
import { FoodRecipesSuggestionsService } from '../food-recipes-suggestions.service';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.css'],
  providers: [MessageService]
})
export class FoodRecipesComponent implements OnInit {

  mealQuery: any;
  searchResults: any;
  loading: any;
  error = null;
  results: any;
  breakfastValue: boolean;
  lunchValue: boolean;
  dinnerValue: boolean;
  snackValue: boolean;
  drinkValue: boolean;

  constructor(
    private foodRecipesService: FoodRecipesService,
    private messageService: MessageService,
    private foodRecipesSuggestionsService: FoodRecipesSuggestionsService
  ) { }

  ngOnInit() {
    this.mealQuery = JSON.parse(localStorage.getItem('mealQuery'));
    this.searchResults = JSON.parse(localStorage.getItem('searchResults'));
    if (this.searchResults == null) {
      console.log('Run Query for vegan');
      this.mealQuery = 'vegan';
      this.recipesQuery(this.mealQuery);
    }
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

        fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
        recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');

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
      localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
      localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    },
    error => {
      console.log('error!!!!!!!!!!!!!!!!!!!');
      console.error(error);
      this.error = error;
      this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
    });
  }

  suggestions(event) {
    this.foodRecipesSuggestionsService.getFoodSuggestions(event.query).subscribe(
      data => {
      this.results = data;
    });
  }

  breakfastQuery(event) {
    this.lunchValue = false;
    this.dinnerValue = false;
    this.snackValue = false;
    this.drinkValue = false;
    if(this.breakfastValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getBreakfast(this.mealQuery).subscribe(
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
  
          fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
          recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
  
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
        console.log(output);
        this.searchResults = output;
        localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      },
      error => {
        console.error(error);
        this.error = error;
        this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
      });
    }
  }

  lunchQuery(event) {
    this.breakfastValue = false;
    this.dinnerValue = false;
    this.snackValue = false;
    this.drinkValue = false;
    if(this.lunchValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getLunch(this.mealQuery).subscribe(
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
  
          fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
          recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
  
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
        console.log(output);
        this.searchResults = output;
        localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      },
      error => {
        console.error(error);
        this.error = error;
        this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
      });
    }
  }

  dinnerQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.snackValue = false;
    this.drinkValue = false;
    if(this.dinnerValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getDinner(this.mealQuery).subscribe(
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
  
          fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
          recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
  
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
        console.log(output);
        this.searchResults = output;
        localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      },
      error => {
        console.error(error);
        this.error = error;
        this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
      });
    }
  }

  snackQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.dinnerValue = false;
    this.drinkValue = false;
    if(this.snackValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getSnack(this.mealQuery).subscribe(
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
  
          fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
          recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
  
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
        console.log(output);
        this.searchResults = output;
        localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      },
      error => {
        console.error(error);
        this.error = error;
        this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
      });
    }
  }

  drinkQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.dinnerValue = false;
    this.snackValue = false;
    if(this.drinkValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getDrink(this.mealQuery).subscribe(
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
  
          fR.ingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
          recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');
  
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
        console.log(output);
        this.searchResults = output;
        localStorage.setItem('mealQuery', JSON.stringify(this.mealQuery));
        localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      },
      error => {
        console.error(error);
        this.error = error;
        this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
      });
    }
  }
}
