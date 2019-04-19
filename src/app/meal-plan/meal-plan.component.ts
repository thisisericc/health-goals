import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from '../food-recipes.service';
import { MessageService } from 'primeng/api';
import {MealPlanService} from '../welcome/meal-plan.service';
import {MealPlan} from '../meal-plan';


@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css'],
  providers: [MessageService]
})
export class MealPlanComponent implements OnInit{
  breakfast: any;
  lunch:any;
  dinner:any;
  searchbResults: any;
  searchlResults: any;
  searchdResults: any;

  loading: any;
  error = null;
  results: any;
  private r: any;

  constructor(
      private foodRecipesService: FoodRecipesService,
      private mealPlanService: MealPlanService,
      private messageService: MessageService
  ) { }


  ngOnInit() {

      let breakfastitems: Array<string>= ['apple-juice','strawberry','toast','fruit','bananas','granola','milk-cereal','bacon','smoothie','omelette','quick','bread','orange-juice'];
      let lunchitems: Array<string>=['veggie-sandwich','chicken-sandwich','egg','rice','bowl','wrap','salad','beans','green','burrito','lunch','whole-wheat','tater-tots','quinoa'];
      let dinneritems: Array<string>=['burger','pizza','steak','pasta','rice','hearty','potatoes','vegetable','eggplant','tomato','steamed-veg','olive','pita-bread','steaks'];
      this.r = this.randomInt(0,breakfastitems.length);
      console.log(breakfastitems[this.r]);
      console.log(lunchitems[this.r]);
      console.log(dinneritems[this.r]);

      this.mealPlanQuery(breakfastitems[this.r], lunchitems[this.r], dinneritems[this.r]);


  }
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  mealPlanQuery(breakfast:string, lunch:string, dinner:string) {
    this.mealPlanService.getmyBreakfast(breakfast).subscribe(
        obj => {
          const output: MealPlan[] = [];
          const str = JSON.stringify(obj);
          const fR = {} as MealPlan;
          str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {
            fR.brecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
            console.log(fR.brecipeName);
            fR.bimageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));

            fR.barticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));

            fR.bdietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],',
                recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');

            fR.bhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],',
                recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');

            fR.bingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
                recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');

            fR.bcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11,
                recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
           // this.totalCal = Number(fR.bcalories);

            fR.bservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',',
                recipe.indexOf('\"yield\"') + 8)))) + '';

            const totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},',
                recipe.indexOf('\"totalDaily\"') + 14));
            fR.btotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11,
                totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';

            fR.bcalories = Math.round(parseFloat(fR.bcalories) / parseFloat(fR.bservings)) + '';
            fR.btotalDaily = Math.round(parseFloat(fR.btotalDaily) / parseFloat(fR.bservings)) + '';

            output.push(fR);
          });
          this.searchbResults = output;
          localStorage.setItem('mealQuery', JSON.stringify(this.breakfast));
          localStorage.setItem('searchResults', JSON.stringify(this.searchbResults));
        },
        error => {
          console.error(error);
          this.error = error;
          this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
        });


    this.mealPlanService.getmyLunch(lunch).subscribe(
        obj => {
          const str = JSON.stringify(obj);
          const output: MealPlan[] = [];
          //const output: MealPlan[] = [];
          str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {

            const fR = {} as MealPlan;

            fR.lrecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
            console.log(fR.lrecipeName);

            fR.limageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));

            fR.larticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));

            fR.ldietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],',
                recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');

            fR.lhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],',
                recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');

            fR.lingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
                recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');

            fR.lcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11,
                recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
           // this.totalCal = this.totalCal + Number(fR.lcalories);

            fR.lservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',',
                recipe.indexOf('\"yield\"') + 8)))) + '';

            const totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},',
                recipe.indexOf('\"totalDaily\"') + 14));
            fR.ltotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11,
                totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';

            fR.lcalories = Math.round(parseFloat(fR.lcalories) / parseFloat(fR.lservings)) + '';
            fR.ltotalDaily = Math.round(parseFloat(fR.ltotalDaily) / parseFloat(fR.lservings)) + '';

            output.push(fR);
          });
          this.searchlResults = output;
          localStorage.setItem('mealQuery', JSON.stringify(this.lunch));
          localStorage.setItem('searchResults', JSON.stringify(this.searchlResults));
        },
        error => {
          console.error(error);
          this.error = error;
          this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
        });

  this.mealPlanService.getmyDinner(dinner).subscribe(
      obj => {
  const str = JSON.stringify(obj);
        const output: MealPlan[] = [];
  //const output: MealPlan[] = [];
  str.substring(str.indexOf('\"recipe\"') + 12, str.length - 1).split('\"recipe\"').forEach(function (recipe) {

    const fR = {} as MealPlan;

    fR.drecipeName = recipe.substring(recipe.indexOf('\"label\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"label\"') + 9));
    console.log(fR.drecipeName);

    fR.dimageURL = recipe.substring(recipe.indexOf('\"image\"') + 9, recipe.indexOf('\"', recipe.indexOf('\"image\"') + 9));

    fR.darticleURL = recipe.substring(recipe.indexOf('\"url\"') + 7, recipe.indexOf('\"', recipe.indexOf('\"url\"') + 7));

    fR.ddietLabels = recipe.substring(recipe.indexOf('\"dietLabels\"') + 14, recipe.indexOf('\],',
        recipe.indexOf('\"dietLabels\"') + 14)).split('\"').join(' ');

    fR.dhealthLabels = recipe.substring(recipe.indexOf('\"healthLabels\"') + 16, recipe.indexOf('\],',
        recipe.indexOf('\"healthLabels\"') + 16)).split('\"').join(' ');

    fR.dingredients = recipe.substring(recipe.indexOf('\"ingredientLines\"') + 19, recipe.indexOf('\],',
        recipe.indexOf('\"ingredientLines\"') + 19)).split('\"').join(' ');

    fR.dcalories = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"calories\"') + 11,
        recipe.indexOf(',', recipe.indexOf('\"calories\"') + 11)))) + '';
   // this.totalCal = this.totalCal + Number(fR.dcalories);
    //console.log(this.totalCal);
    fR.dservings = Math.round(parseFloat(recipe.substring(recipe.indexOf('\"yield\"') + 8, recipe.indexOf(',',
        recipe.indexOf('\"yield\"') + 8)))) + '';

    const totalDailyStr = recipe.substring(recipe.indexOf('\"totalDaily\"') + 14, recipe.indexOf('\},',
        recipe.indexOf('\"totalDaily\"') + 14));
    fR.dtotalDaily = Math.round(parseFloat(totalDailyStr.substring(totalDailyStr.indexOf('\"quantity\"') + 11,
        totalDailyStr.indexOf('\,', totalDailyStr.indexOf('\"quantity\"') + 11)))) + '\%';

    fR.dcalories = Math.round(parseFloat(fR.dcalories) / parseFloat(fR.dservings)) + '';
    fR.dtotalDaily = Math.round(parseFloat(fR.dtotalDaily) / parseFloat(fR.dservings)) + '';

    output.push(fR);
  });
  this.searchdResults = output;
  localStorage.setItem('mealQuery', JSON.stringify(this.dinner));
  localStorage.setItem('searchResults', JSON.stringify(this.searchdResults));
},
error => {
  console.error(error);
  this.error = error;
  this.messageService.add({severity: 'error', summary: this.error, life: 5000, detail: 'Search Failed!'});
});

}
}
