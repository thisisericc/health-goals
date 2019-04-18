import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ExerciseVideos{

  Difficulty: string;
  TrainingType: string;
  VideoName: string;
  BodyFocus: string;
  Link:string;
  ImageLink:string;
  FinalLink: string;
}
@Injectable({
  providedIn: 'root'
})

export class ExercisevideosService {

  constructor(
    public http: HttpClient
  ) {

   }

  getVideos(){
    return this.http.get<ExerciseVideos[]>('/api/videos');
  }

  getDifficultyLevel(difficulty:string){
    return this.http.get<ExerciseVideos[]>('/api/difficulty/'+difficulty);

  }
  getTrainingType(trainingtype:string){
    return this.http.get<ExerciseVideos[]>('/api/trainingtype/'+trainingtype);

  }
  getbodyfocus(bodyfocus:string){
    return this.http.get<ExerciseVideos[]>('/api/bodyfocus/'+bodyfocus);

  }
  getcombine(training:string,difficulty:string,bodyfocus:string){
    return this.http.get<ExerciseVideos[]>('/api/combine/'+training+ "/" +difficulty+ "/"+bodyfocus );

  }
  gettd(training:string,difficulty:string){
    return this.http.get<ExerciseVideos[]>('/api/combine/'+training+ "/" +difficulty);

  }
  getdf(difficulty:string,focus:string){
    return this.http.get<ExerciseVideos[]>('/api/combine/'+difficulty+ "/" +focus);

  }
  gettf(training:string,focus:string){
    return this.http.get<ExerciseVideos[]>('/api/combine/'+training+ "/" +focus);

  }
  searchVideo(name: string) {
    return this.http.get<ExerciseVideos[]>('/api/SearchVideos/'+name);
  }

  findvideo(video: string){
    return this.http.get<ExerciseVideos[]>('/api/videos/' +video);
  }

}

