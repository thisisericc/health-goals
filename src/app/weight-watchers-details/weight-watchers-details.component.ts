import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GroupInfo ,WeightWatchersService, GroupMemberInfo } from '../weight-watchers.service' ;
import { HttpResponse } from '@angular/common/http';

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

  constructor(
    public weightwatchersService: WeightWatchersService,
    private watchersService: WeightWatchersService,
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

    })
  }

  ngOnInit() {
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
  
  JoinGroup(username: string){
    this.weightwatchersService.JoinGroup(this.NameOfGroup, username).subscribe(
      data => {
        this.groupmemberdetails = data;
       alert('Group Joined!!')
      },
      error => {
        alert('Cannot Join Group!!');
      }
    )
  }

}
