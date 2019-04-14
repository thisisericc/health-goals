import { Component, OnInit} from '@angular/core';
import { ExerciseVideos, ExercisevideosService } from '../exercisevideos.service';


@Component({
  selector: 'app-exercise-videos',
  templateUrl: './exercise-videos.component.html',
  styleUrls: ['./exercise-videos.component.css']
})


export class ExerciseVideosComponent implements OnInit{

  videos: ExerciseVideos[];
  trainingtype:string;
  training: string;
  difficulty: string;
  bodyfocus: string;
  videolink:string;
  selectedTraining: string;
  selectedDifficulty: string;
  selectedFocus: string;
  input: string;
  

  constructor(
    public videoService: ExercisevideosService

  ) { 
    this.videoService.getDifficultyLevel(this.difficulty).subscribe(
      data => {
        console.log(data)
      }
    )
    this.videoService.getTrainingType(this.trainingtype).subscribe(
      data => {
        console.log(data)
      }
    )
    this.videoService.getbodyfocus(this.bodyfocus).subscribe(
      data => {
        console.log(data)
      }
    )
    
  }

  ngOnInit() {
    this.trainingtype = undefined;
    this.training = undefined;
    this.difficulty = undefined;
    this.bodyfocus = undefined;
    this.getVideos();

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
