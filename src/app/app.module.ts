import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { ExerciseVideosComponent } from './exercise-videos/exercise-videos.component';
import { WeightWatchersComponent } from './weight-watchers/weight-watchers.component';
import { FoodBlogsComponent } from './food-blogs/food-blogs.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { FitnessInstructorsComponent } from './fitness-instructors/fitness-instructors.component';
import { FindTherapistComponent } from './find-therapist/find-therapist.component';
import { MhForumsComponent } from './mh-forums/mh-forums.component';
import { MhArticlesComponent } from './mh-articles/mh-articles.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseVideosComponent,
    WeightWatchersComponent,
    FoodBlogsComponent,
    FoodRecipesComponent,
    FitnessInstructorsComponent,
    FindTherapistComponent,
    MhForumsComponent,
    MhArticlesComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
