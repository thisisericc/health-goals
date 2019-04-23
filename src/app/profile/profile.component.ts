import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {WelcomeService, User, GroupInfo, GroupMemberInfo, UserForums, SavedRecipes} from '../welcome.service';
import {ExercisevideosService, ExerciseVideos} from '../exercisevideos.service'
import {DataTableModule,SharedModule,DialogModule} from 'primeng/primeng';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID: any;
  user: User[];
  groupInfos: GroupInfo[];
  groupMemberInfos: GroupMemberInfo[];
  savedvideos: ExerciseVideos[];
  savedRecipes: SavedRecipes[];
  userForums: UserForums[];
  isNULL: boolean = false;

  constructor(
    private userService: WelcomeService,
    public videoService: ExercisevideosService,
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
          if (data == null){
            console.log("NULL YO");
            this.isNULL = true;
            return;
          }
          console.log("usergroups" + data)
          this.groupInfos = data;
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
          if (data == null){
            console.log("NULL YO");
            this.isNULL = true;
            return;
          }
          this.groupMemberInfos = data;
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

      userService.get_user_forum(this.userID).subscribe(
        data => {
          this.userForums = data;
          console.log(this.userForums);
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('User Forums not found');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Check the console.');
          }
        }
      );

      videoService.getSavedVideos(this.userID).subscribe(
        data => {
          this.savedvideos = data;
          console.log(this.savedvideos);
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('Videos not found.');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Check the console.');
          }
        }
      );

      userService.get_saved_recipes(this.userID).subscribe(
        data => {
          this.savedRecipes = data;
          console.log(this.savedRecipes);
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('Recipes not found.');
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