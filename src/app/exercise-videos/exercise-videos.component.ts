import { Component, OnInit } from '@angular/core';
import { ExerciseVideosService } from '../exercise-videos.service';
import { ExerciseVideos } from '../exercise-videos';


@Component({
  selector: 'app-exercise-videos',
  templateUrl: './exercise-videos.component.html',
  styleUrls: ['./exercise-videos.component.css']
})
export class ExerciseVideosComponent implements OnInit {

  searchResults: any;

  constructor(
    private exerciseVideosService: ExerciseVideosService
  ) { }

  ngOnInit() {
  }

  exerciseQuery(videoQuery: string) {
    this.exerciseVideosService.getExerciseVideo(videoQuery).subscribe(
      obj => {
      const str = JSON.stringify(obj);
      const output: ExerciseVideos[] = [];
      str.substring(str.indexOf('\"Video\"') + 12, str.length - 1).split('\"Video\"').forEach(function (video) {

        const eR = {} as ExerciseVideos;

        eR.imageURL = video.substring(video.indexOf('\"image\"') + 9, video.indexOf('\"', video.indexOf('\"image\"') + 9));
        eR.articleURL = video.substring(video.indexOf('\"url\"') + 7, video.indexOf('\"', video.indexOf('\"url\"') + 7));
        // console.log(eR.dietLabels);

        output.push(eR);
      });
      this.searchResults = output;
    });
  }

}
