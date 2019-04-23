import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GroupInfo ,WeightWatchersService, GroupMemberInfo } from '../weight-watchers.service' ;
import { HttpResponse } from '@angular/common/http';
import { User, WelcomeService, LoggedIn } from '../welcome.service';

import { SelectItem } from 'primeng/components/common/selectitem';
 
@Component({
  selector: 'app-weight-watchers-details',
  templateUrl: './weight-watchers-details.component.html',
  styleUrls: ['./weight-watchers-details.component.css']
})
export class WeightWatchersDetailsComponent implements OnInit {

  NameOfGroup: string;
  groupdetails: GroupInfo[];
  groups: GroupInfo[];
  GroupNumber: string;
  members: GroupMemberInfo[];
  groupmemberdetails: GroupMemberInfo[];
  Rank: string; 

  user: User[]
  loggedIn: boolean = false;
  

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;


  constructor(
    public weightwatchersService: WeightWatchersService,
    private watchersService: WeightWatchersService,
    public userService: WelcomeService,
    private route: ActivatedRoute,
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.NameOfGroup = paramMap.get('group');

      watchersService.getgroup(this.NameOfGroup).subscribe(
        data => {
          this.groupdetails = data;  
          console.log(data);
        },
        (error: HttpResponse<any>) => {
                    if (error.status === 404) {
                    alert('Group not found');
                    } else {
                      console.error(error.status + ' - ' + error.body);
                      alert('An error occurred on the server. Please check the console.')
                    }
                  }
      )
      watchersService.getMemberInfo(this.NameOfGroup).subscribe(
        data => {
          this.groupmemberdetails = data;  
          console.log(data);
        },
        (error: HttpResponse<any>) => {
                    if (error.status === 404) {
                    alert('Group members not found');
                    } else {
                      console.error(error.status + ' - ' + error.body);
                      alert('An error occurred on the server. Please check the console.')
                    }
                  }
      )

      watchersService.getRank(this.NameOfGroup).subscribe(
        data => {
          this.groupmemberdetails = data;  
          console.log(data);
        }
      );
    
      this.filterOptions = [
        {
          'label' : 'Highest Rank First',
          'value' : 'high rank'
        },
        {
          'label' : 'Lowest Rank First',
          'value' : 'low rank'
        },
      ];
    });
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

  getMemberInfo(Name: string){
    this.weightwatchersService.getMemberInfo(Name).subscribe(
      data => {
        this.groupmemberdetails = data;
      },
      error => {
        alert('Cannot retrieve Data');
      }
    )
  }
  
  JoinGroup(username: string, name: string){
    this.weightwatchersService.JoinGroup(this.NameOfGroup, username, name).subscribe(
      data => {
        this.groupmemberdetails = data;
       alert('Group Joined!!')
      },
      error => {
        alert('Cannot Join Group!!');
      }
    )
  }

  signintoGroup(){
    alert('Please Sign In To Join A Group!')
  }

}