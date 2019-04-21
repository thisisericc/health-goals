import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { MentalHealthForums, MentalHealthForumReplies, MentalHealthForumsService } from '../mental-health-forums.service';
import {Location} from '@angular/common';
import {User, WelcomeService, LoggedIn} from '../welcome.service'

@Component({
  selector: 'app-mh-forums-details',
  templateUrl: './mh-forums-details.component.html',
  styleUrls: ['./mh-forums-details.component.css']
})
export class MhForumsDetailsComponent implements OnInit {

  forums: MentalHealthForums[];
  latestForums: MentalHealthForums[];
  forumName: string;
  forumDetails: MentalHealthForums[];
  selectedValues: string;
  input: string;
  replies: MentalHealthForumReplies[];
  NewReply: string;

  user: User[]
  loggedIn: boolean = false;

  constructor(
    public forumsService: MentalHealthForumsService,
    private mentalHealthForumsService: MentalHealthForumsService,
    private route: ActivatedRoute,
    public userService: WelcomeService,
    private _location: Location
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.forumName = paramMap.get('forum');

      mentalHealthForumsService.findForum(this.forumName).subscribe(
        data => {
          this.forumDetails = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
          alert('Forum not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the console.')
          }
        }
      )

      mentalHealthForumsService.getReplies(this.forumName).subscribe(
        data => {
          this.replies = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
          alert('Replies not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the console.')
          }
        }
      )
    });
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    if(localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
      this.get_userdata(localStorage.getItem("ID"));
    }
    else{
      this.loggedIn = false;
      localStorage.clear();
      localStorage.setItem("loggedIn", "false");
    }
  }

  get_userdata(ID: any){
    this.userService.get_userdata(ID).subscribe(
      data => {
        this.user= data;
      },
      error => {
        alert("unable to get user data");
      }
    )
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

  addNewReply(useremail: string, reply: string) {
    this.forumsService.addReply(useremail, this.forumName, reply).subscribe(
      data => {
        this.forums = data;
        alert('Reply posted');
      },
      error => {
        alert('Error in adding reply');
      }
    );
    this._location.back();
  }

}
