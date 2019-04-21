import { Component, OnInit } from '@angular/core';
import {MentalHealthForums, MentalHealthForumReplies, MentalHealthForumsService} from '../mental-health-forums.service';
import {Location} from '@angular/common';
import {User, WelcomeService, LoggedIn} from '../welcome.service'

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

  user: User[]
  loggedIn: boolean = false;

  constructor(
    public forumsService: MentalHealthForumsService,
    public userService: WelcomeService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.getForums();

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

  postForum(useremail: string, name: string, description: string, topic: string) {
    this.forumsService.postForum(useremail, name, description, topic).subscribe(
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

  SignInToPostForum() {
    alert('Please sign in or sign up to post a forum!');
  }

}
