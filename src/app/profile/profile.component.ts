import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {WelcomeService, User, GroupInfo, GroupMemberInfo} from '../welcome.service';
import {DataTableModule,SharedModule,DialogModule} from 'primeng/primeng';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: any;
  user: User[];
  groupInfo: GroupInfo[];
  groupMemberInfo: GroupMemberInfo[];

  constructor(
    private userService: WelcomeService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.userID = paramMap.get('ID');
      console.log("USER ID" + this.userID);

      userService.get_userdata(this.userID).subscribe(
        data => {
          this.user = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('User not found.');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Check the console.');
          }
        }
      );

      userService.get_usergroups(this.userID).subscribe(
        data => {
          this.groupInfo = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('Group not found.');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Check the console.');
          }
        }
      );

      userService.get_groupmemberinfo(this.userID).subscribe(
        data => {
          this.groupMemberInfo = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('Group Member Info not found.');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Check the console.');
          }
        }
      );
    });
  }

  ngOnInit() {
  }

}