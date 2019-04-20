import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {Youtube} from '../pipes/youtube';
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
import {CarouselModule} from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
<<<<<<< HEAD
import { HttpClientModule, HttpClient } from '@angular/common/http';
=======
import { HttpClientModule, HttpClient} from '@angular/common/http';
>>>>>>> 8c7b5ae3324b439f72558eaf32cbb85e3c9548d7
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { WeightWatchersDetailsComponent } from './weight-watchers-details/weight-watchers-details.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { TableModule } from 'primeng/table';
import { MhForumsDetailsComponent } from './mh-forums-details/mh-forums-details.component';
import { MhStartForumComponent } from './mh-start-forum/mh-start-forum.component';
import { SignupComponent } from './signup/signup.component';
import {WelcomeService} from './welcome.service'
import { ExerciseVideosDetailsComponent } from './exercise-videos-details/exercise-videos-details.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

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
    WelcomeComponent,
<<<<<<< HEAD
    WeightWatchersDetailsComponent,
    MealPlanComponent
=======
    ExerciseVideosDetailsComponent,
    Youtube,
    MealPlanComponent,
    MhForumsDetailsComponent,
    MhStartForumComponent,
    SignupComponent
>>>>>>> 8c7b5ae3324b439f72558eaf32cbb85e3c9548d7
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    CardModule,
    CheckboxModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    DropdownModule,
    HttpClientModule,
    CarouselModule,
    TableModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TableModule,
    AutoCompleteModule
  ],
<<<<<<< HEAD
  providers: [ HttpClient ],
=======
  providers: [HttpClient, WelcomeComponent],
>>>>>>> 8c7b5ae3324b439f72558eaf32cbb85e3c9548d7
  bootstrap: [AppComponent]
})
export class AppModule { }
