import { Component, OnInit } from '@angular/core';
import {MentalHealthForums, MentalHealthForumReplies, MentalHealthForumsService} from '../mental-health-forums.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mh-start-forum',
  templateUrl: './mh-start-forum.component.html',
  styleUrls: ['./mh-start-forum.component.css']
})
export class MhStartForumComponent implements OnInit {

  forums: MentalHealthForums[];
  selectedValues: string;
  NameOfNewForum: string;
  NewDescription: string;
  NewTopic: string;

  constructor(
    public forumsService: MentalHealthForumsService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.getForums();
  }

  backClicked() {
    this._location.back();
  }

  getForums() {
    this.forumsService.getForums().subscribe(
        data => {
          this.forums = data;
        },
        error => {
          alert('Could not retrieve a list of forums');
        }
      )  
  }

  filterByTopic(topic: string){
    this.forumsService.filterByTopic(topic).subscribe(
      data => {
        this.forums = data;
      },
      error => {
        alert('Could not retrieve a list of forums with this topic');
      }
    );
}

  postForum(name: string, description: string, topic: string) {
    this.forumsService.postForum(name, description, topic).subscribe(
      data => {
        this.forums = data;
        alert('Forum posted');
      },
      error => {
        alert('Error in posting forum');
      }
    );
    this._location.back();
  }

}
