import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  ID: any;
  FirstName: String;
  LastName: String;
  Email: String;
  Password: String;
  Goals: String;
  Description: String;
  Diet: String;
  Restriction: String;
}

export interface GroupInfo {
  GroupNumber: any;
  NameOfGroup: string;
  TrainingType: string;
  CalorieGoal: string;
}

export interface GroupMemberInfo {
  GroupNumber: any;
  NameOfGroup: string;
  UserID: any;
  MemberName: string;
  Rank: any;
  GoalReached: string;
}

export interface UserForums {
  Description: string;
  Email: string;
  NameOfForum: string;
}

export interface LoggedIn{

}

export interface SavedRecipes{
  ID: any;
  Name: any;
  URL: any;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  ID: number;
  loggedIn: boolean = false;

  constructor(
    public http: HttpClient
  ) { }

  get_login(email:String, password:String) {
    return this.http.get<User[]>('/api/login/'+email+'/'+password)
  }

  get_userdata(ID: any){
    return this.http.get<User[]>('/api/get_userdata/'+ID)
  }

  sign_up(FirstName: String, LastName: String, Email: String, Password:String, Description:String, Goals: String, Diet: String, Restrictions: String){
    return this.http.get<User[]>('/api/signup/'+FirstName+'/'+LastName+'/'+Email+'/'+Password+'/'+Description+'/'+Goals+'/'+Diet+'/'+Restrictions)
  }

  get_usergroups(ID: any){
    return this.http.get<GroupInfo[]>('/api/get_usergroups/'+ID)
  }

  get_groupmemberinfo(ID: any){
    return this.http.get<GroupMemberInfo[]>('/api/get_groupmemberinfo/'+ID)
  }

  get_user_forum(ID: any){
    return this.http.get<UserForums[]>('/api/get_user_forums/'+ID)
  }

  get_saved_recipes(ID: any){
    return this.http.get<SavedRecipes[]>('/api/get_saved_recipes/'+ID)
  }

}