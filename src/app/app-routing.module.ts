import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExerciseVideosComponent } from './exercise-videos/exercise-videos.component';
import { FindTherapistComponent } from './find-therapist/find-therapist.component';
import { FitnessInstructorsComponent } from './fitness-instructors/fitness-instructors.component';
import { FoodBlogsComponent } from './food-blogs/food-blogs.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { MhArticlesComponent } from './mh-articles/mh-articles.component';
import { MhForumsComponent } from './mh-forums/mh-forums.component';
import { MhForumsDetailsComponent } from './mh-forums-details/mh-forums-details.component';
import { MhStartForumComponent } from './mh-start-forum/mh-start-forum.component';
import { WeightWatchersComponent } from './weight-watchers/weight-watchers.component';
<<<<<<< HEAD
import { ExerciseVideosDetailsComponent } from './exercise-videos-details/exercise-videos-details.component';
=======
import {MealPlanComponent} from './meal-plan/meal-plan.component';
>>>>>>> bd05f5d9ded14aaf4747e08d3596095fb0fc9698

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'exercise-videos',
    pathMatch: 'full',
    component: ExerciseVideosComponent
  },
  {
    path: 'exercise-videos/:videos',
    pathMatch: 'full',
    component:ExerciseVideosDetailsComponent
  },
  {
    path: 'find-therapist',
    pathMatch: 'full',
    component: FindTherapistComponent
  },
  {
    path: 'fitness-instructors',
    pathMatch: 'full',
    component: FitnessInstructorsComponent
  },
  {
    path: 'food-blogs',
    pathMatch: 'full',
    component: FoodBlogsComponent
  },
  {
    path: 'food-recipes',
    pathMatch: 'full',
    component: FoodRecipesComponent
  },
  {
    path: 'mh-articles',
    pathMatch: 'full',
    component: MhArticlesComponent
  },
  {
    path: 'mh-forums',
    pathMatch: 'full',
    component: MhForumsComponent
  },
  {
    path: 'mh-forums/:forum',
    pathMatch: 'full',
    component: MhForumsDetailsComponent
  },
  {
    path: 'mh-start',
    pathMatch: 'full',
    component: MhStartForumComponent
  },
  {
    path: 'weight-watchers',
    pathMatch: 'full',
    component: WeightWatchersComponent
  },
  {
    path: 'meal-plan',
    pathMatch: 'full',
    component: MealPlanComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
