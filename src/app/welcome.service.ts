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
  DietaryRestrictions: String;
  Picture: String;
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

  sign_up(FirstName: String, LastName: String, Email: String, Password:String, Description:String, Goals: String, DietaryRestrictions: String, Picture: String){
    return this.http.get<User[]>('/api/signup/'+FirstName+'/'+LastName+'/'+Email+'/'+Password+'/'+Description+'/'+Goals+'/'+DietaryRestrictions+'/'+Picture)
  }

  get_usergroups(ID: any){
    return this.http.get<GroupInfo[]>('/api/get_usergroups/'+ID)
  }

  get_groupmemberinfo(ID){
    return this.http.get<GroupMemberInfo[]>('/api/get_groupmemberinfo/'+ID)
  }

  default_img(id, blob){
    return this.http.get('/api/default_img/'+id+'/'+blob)
  }

  update_img(id, blob){
    return this.http.get('/api/update_img/'+id+'/'+blob)
  }
}