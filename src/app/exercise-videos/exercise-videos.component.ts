import { Component, OnInit } from '@angular/core';
import { ExerciseVideosService } from '../exercise-videos.service';
import { ExerciseVideos } from '../exercise-videos';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exercise-videos',
  templateUrl: './exercise-videos.component.html',
  styleUrls: ['./exercise-videos.component.css']
})
export class ExerciseVideosComponent implements OnInit {

  videoQuery: any;
  response: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  search(){
    this.http.get('https://api.github.com/users/' +this.videoQuery)
    .subscribe((response)=>{
        this.response =response;
        console.log(this.response);
    })
  }

}
