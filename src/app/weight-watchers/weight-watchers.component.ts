import { Component, OnInit } from '@angular/core';
import { GroupInfo ,WeightWatchersService, GroupMemberInfo } from '../weight-watchers.service' ;
import { User, WelcomeService, LoggedIn } from '../welcome.service';


@Component({
  selector: 'app-weight-watchers',
  templateUrl: './weight-watchers.component.html',
  styleUrls: ['./weight-watchers.component.css']
})
export class WeightWatchersComponent implements OnInit {

  groups: GroupInfo[];
  input: string;
  selectedValues: string; 
  selectedCalories: string;
  members: GroupMemberInfo[];
  user: User[]
  loggedIn: boolean = false;

  constructor(
    public weightwatchersService: WeightWatchersService,
    public userService: WelcomeService
    
  ) { 
  }

  ngOnInit() {
    this.getGroupInfo();

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
  
  getGroupInfo() {
    this.weightwatchersService.getGroupInfo().subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  getgroup(group: string) {
    this.weightwatchersService.getgroup(group).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
      }
    )
  }

  getMemberInfo(number: string){
    this.weightwatchersService.getMemberInfo(number).subscribe(
      data => {
        this.members = data;
      },
      error => {
        alert('Cannot retrieve Data');
      }
    )
  }  

  searchForGroups(name: string) {
    this.weightwatchersService.searchForGroups(name).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  filterexercise(exercise: string) {
    this.weightwatchersService.filterexercise(exercise).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

  filtercalories(calories: string) {
    this.weightwatchersService.filtercalories(calories).subscribe(
      data => {
        this.groups = data;
      },
    error => {
      alert('Cannot retrieve Data');
    }
    );
  }

}