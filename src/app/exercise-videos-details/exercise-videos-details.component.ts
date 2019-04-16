
import { ExerciseVideos, ExercisevideosService } from '../exercisevideos.service';
import { ActivatedRoute } from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercise-videos-details',
  templateUrl: './exercise-videos-details.component.html',
  styleUrls: ['./exercise-videos-details.component.css']
})
export class ExerciseVideosDetailsComponent implements OnInit {

  videos: ExerciseVideos[];
  trainingtype:string;
  training: string;
  videoname:string;
  finalink:string;
  difficulty: string;
  bodyfocus: string;
  videolink:string;
  videoDetails: ExerciseVideos[];
  selectedTraining: string;
  selectedDifficulty: string;
  selectedFocus: string;
  input: string;

  constructor(
    public videoService: ExercisevideosService,
    private exercisevideoService: ExercisevideosService,
    private route: ActivatedRoute,
    private _location:Location,
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.videoname = paramMap.get('videos');

      exercisevideoService.findvideo(this.videoname).subscribe(
        data => {
          this.videoDetails = data;
          console.log(data);
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
          alert('Video not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the console.')
          }
        }
      )
    });
   }

   backClicked(){
     this._location.back();
   }
  ngOnInit() {
  }

  
  getVideos(){
    this.videoService.getVideos().subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of videos');
      }
    )
  }

  getDifficultyLevel(difficulty: string){
    this.videoService.getDifficultyLevel(difficulty).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of difficulties');
      }
    )
  }
  getTrainingType(trainingtype: string){
    this.videoService.getTrainingType(trainingtype).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of training types');
      }
    )
  }
  getbodyfocus(bodyfocus: string){
    this.videoService.getbodyfocus(bodyfocus).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of Body Focus types');
      }
    )
  }
  
  getcombine(training: string,difficulty: string,bodyfocus: string ){
    
    if (training != undefined && difficulty == undefined && bodyfocus == undefined ) {
      this.videoService.getTrainingType(training).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of training types');
        }
      )
    }
    else if (training == undefined && difficulty != undefined && bodyfocus == undefined ) {
      this.videoService.getDifficultyLevel(difficulty).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of difficulties');
        }
      )
    }
    else if (training == undefined && difficulty == undefined && bodyfocus != undefined) {
      this.videoService.getbodyfocus(bodyfocus).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of Body Focus types');
        }
      )
    }
    else if (training != undefined && difficulty != undefined && bodyfocus == undefined) {
      this.videoService.gettd(training,difficulty).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of training and difficulty types');
        }
      )
    }
    else if (training == undefined && difficulty != undefined && bodyfocus != undefined) {
      this.videoService.getdf(difficulty,bodyfocus).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of difficulty and body focus types');
        }
      )
    }
    else if (training != undefined && difficulty == undefined && bodyfocus != undefined) {
      this.videoService.gettf(training,bodyfocus).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Could not retrieve a list of training and body focus types');
        }
      )
    }
    else {
      this.videoService.getcombine(training,difficulty,bodyfocus).subscribe(
        data => {
          this.videos = data;
        },
        error => {
          alert ('Error');
        }
      )
    }
  }
  gettd(training: string,difficulty: string){
    this.videoService.gettd(training,difficulty).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of types');
      }
    )
  }
  getdf(difficulty: string, focus: string){
    this.videoService.gettd(difficulty,focus).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of types');
      }
    )
  }
  gettf(training: string, focus: string){
    this.videoService.gettd(training,focus).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert ('Could not retrieve a list of types');
      }
    )
  }

  searchVideo(name: string) {
    this.videoService.searchVideo(name).subscribe(
      data => {
        this.videos = data;
      },
      error => {
        alert('No videos found');
      }
    )
  }


}