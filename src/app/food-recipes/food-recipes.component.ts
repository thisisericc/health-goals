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
  searchResults: any = [];
  loading: any;
  error = null;
  results: any;
  breakfastValue: boolean;
  lunchValue: boolean;
  dinnerValue: boolean;
  snackValue: boolean;
  drinkValue: boolean;
  balancedValue: boolean;
  highProteinValue: boolean;
  lowFatValue: boolean;
  lowCarbValue: boolean;
  dietFilters: string[] = [];
  veganValue: boolean;
  vegetarianValue: boolean;
  sugarConsciousValue: boolean;
  peanutFreeValue: boolean;
  treeNutFreeValue: boolean;
  alcoholFreeValue: boolean;
  healthFilters: string[] = [];
  sortField: string;
  sortOrder: number;
  sortKey: string;
  sortOptions: string[];

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

    this.sortOptions = ['A-Z', 'Z-A', 'Calories'];
  }

  recipesQuery(mealQuery: string) {
    this.foodRecipesService.getFoodRecipes(mealQuery, this.dietFilters, this.healthFilters).subscribe(
      obj => {
      const str = JSON.stringify(obj);
      const output: FoodRecipes[] = [];
      if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
      }
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
      this.foodRecipesService.getBreakfast(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(
        obj => {
        const str = JSON.stringify(obj);
        const output: FoodRecipes[] = [];

        if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
        }
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
    } else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
      this.recipesQuery(this.mealQuery);
    }
  }

  lunchQuery(event) {
    this.breakfastValue = false;
    this.dinnerValue = false;
    this.snackValue = false;
    this.drinkValue = false;
    if(this.lunchValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getLunch(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(
        obj => {
        const str = JSON.stringify(obj);
        const output: FoodRecipes[] = [];

        if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
        }

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
    } else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
      this.recipesQuery(this.mealQuery);
    }
  }

  dinnerQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.snackValue = false;
    this.drinkValue = false;
    if(this.dinnerValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getDinner(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(
        obj => {
        const str = JSON.stringify(obj);
        const output: FoodRecipes[] = [];

        if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
        }

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
    } else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
      this.recipesQuery(this.mealQuery);
    }
  }

  snackQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.dinnerValue = false;
    this.drinkValue = false;
    if(this.snackValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getSnack(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(
        obj => {
        const str = JSON.stringify(obj);
        const output: FoodRecipes[] = [];

        if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
        }

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
    } else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
      this.recipesQuery(this.mealQuery);
    }
  }

  drinkQuery(event) {
    this.breakfastValue = false;
    this.lunchValue = false;
    this.dinnerValue = false;
    this.snackValue = false;
    if(this.drinkValue) {
      console.log(this.mealQuery);
      this.foodRecipesService.getDrink(this.mealQuery, this.dietFilters, this.healthFilters).subscribe(
        obj => {
        const str = JSON.stringify(obj);
        const output: FoodRecipes[] = [];

        if(parseInt(str.substring(str.indexOf('\"count\"') + 8, str.indexOf(',', str.indexOf('\"count\"') + 8)), -1) > 0) {
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
        }

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
    } else if (!(this.breakfastValue || this.lunchValue || this.dinnerValue || this.drinkValue || this.snackValue)) {
      this.recipesQuery(this.mealQuery);
    }
  }

  balancedQuery(event) {
    if (this.balancedValue) {
      this.dietFilters.push('balanced');
    } else {
      this.dietFilters[this.dietFilters.indexOf('balanced')] = '';
      this.removeDiet('balanced');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  highProteinQuery(event) {
    if (this.highProteinValue) {
      this.dietFilters.push('high-protein');
    } else {
      this.dietFilters[this.dietFilters.indexOf('high-protein')] = '';
      this.removeDiet('high-protein');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  lowFatQuery(event) {
    if (this.lowFatValue) {
      this.dietFilters.push('low-fat');
    } else {
      this.dietFilters[this.dietFilters.indexOf('low-fat')] = '';
      this.removeDiet('low-fat');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  lowCarbQuery(event) {
    if (this.lowCarbValue) {
      this.dietFilters.push('low-carb');
    } else {
      this.dietFilters[this.dietFilters.indexOf('low-carb')] = '';
      this.removeDiet('low-carb');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  removeDiet(filter: string) {
    const filters = [];
    this.dietFilters.forEach(function (filter) {
      if (filter.length > 0) {
        filters.push(filter);
      }
    });
    this.dietFilters = filters;
  }

  veganQuery(event) {
    if (this.veganValue) {
      this.healthFilters.push('vegan');
    } else {
      this.healthFilters[this.healthFilters.indexOf('vegan')] = '';
      this.removeHealth('vegan');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  vegetarianQuery(event) {
    if (this.vegetarianValue) {
      this.healthFilters.push('vegetarian');
    } else {
      this.healthFilters[this.healthFilters.indexOf('vegetarian')] = '';
      this.removeHealth('vegetarian');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  sugarConsciousQuery(event) {
    if (this.veganValue) {
      this.healthFilters.push('sugar-conscious');
    } else {
      this.healthFilters[this.healthFilters.indexOf('sugar-conscious')] = '';
      this.removeHealth('sugar-conscious');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  peanutFreeQuery(event) {
    if (this.veganValue) {
      this.healthFilters.push('peanut-free');
    } else {
      this.healthFilters[this.healthFilters.indexOf('peanut-free')] = '';
      this.removeHealth('peanut-free');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  treeNutFreeQuery(event) {
    if (this.veganValue) {
      this.healthFilters.push('tree-nut-free');
    } else {
      this.healthFilters[this.healthFilters.indexOf('tree-nut-free')] = '';
      this.removeHealth('tree-nut-free');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  alcoholFreeQuery(event) {
    if (this.veganValue) {
      this.healthFilters.push('alcohol-free');
    } else {
      this.healthFilters[this.healthFilters.indexOf('alcohol-free')] = '';
      this.removeHealth('alcohol-free');
    }

    if (this.breakfastValue) {
      this.breakfastQuery(this.mealQuery);
    } else if (this.lunchValue) {
      this.lunchQuery(this.mealQuery);
    } else if (this.dinnerValue) {
      this.dinnerQuery(this.mealQuery);
    } else if (this.snackValue) {
      this.snackQuery(this.mealQuery);
    } else if (this.drinkValue) {
      this.drinkQuery(this.mealQuery);
    } else {
      this.recipesQuery(this.mealQuery);
    }
  }

  removeHealth(filter: string) {
    const filters = [];
    this.healthFilters.forEach(function (filter) {
      if (filter.length > 0) {
        filters.push(filter);
      }
    });
    this.healthFilters = filters;
  }

  onSortChange(event) {
    if (this.searchResults.length > 0) {

    }
  }
}
