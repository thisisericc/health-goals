import { Component, OnInit} from '@angular/core';
import {MentalHealthForums, MentalHealthForumsService} from '../mental-health-forums.service';

@Component({
  selector: 'app-mh-forums',
  templateUrl: './mh-forums.component.html',
  styleUrls: ['./mh-forums.component.css']
})

export class MhForumsComponent implements OnInit {

  forums: MentalHealthForums[];
  latestForums: MentalHealthForums[];
  topic: string;
  selectedValues: string;
  input: string;

  constructor(
    public forumsService: MentalHealthForumsService
  ) { 
  }

  ngOnInit() {
    this.getForums();
    this.getLatestForums();
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

  getLatestForums() {
    this.forumsService.getLatestForums().subscribe(
        data => {
          this.latestForums = data;
        },
        error => {
          alert('Could not retrieve a list of latest forums');
        }
      )  
  }

  findForum(forum: string) {
    this.forumsService.findForum(forum).subscribe(
        data => {
          this.forums = data;
        },
        error => {
          alert('Could not find this forum');
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
  
  searchForForums(name: string) {
    this.forumsService.searchForForums(name).subscribe(
      data => {
        this.forums = data;
      },
      error => {
        alert('No forums found');
      }
    );
  }
}