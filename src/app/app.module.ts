import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    CardModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
