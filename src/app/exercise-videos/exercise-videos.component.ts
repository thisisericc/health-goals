import { Component, OnInit } from '@angular/core';
import { ExerciseVideosService } from '../exercise-videos.service';
import { ExerciseVideos } from '../exercise-videos';


@Component({
  selector: 'app-exercise-videos',
  templateUrl: './exercise-videos.component.html',
  styleUrls: ['./exercise-videos.component.css']
})
export class ExerciseVideosComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
