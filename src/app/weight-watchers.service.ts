import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GroupInfo {
  GroupNumber: string;
  NameOfGroup: string;
  TrainingType: string;
  CalorieGoal: string;
}

export interface GroupMemberInfo {
  GroupNumber: string;
  NameOfGroup: string;
  UserID: string;
  MemberName: string;
  Rank: string;
  GoalReached: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeightWatchersService  {

  constructor(
   public http: HttpClient
  ) { }

  getGroupInfo() {
    return this.http.get<GroupInfo[]>('/api/groups');
  }
  
  getgroup(group: string){
    return this.http.get<GroupInfo[]>('/api/group/' +group);
  }

  searchForGroups(name: string){
    return this.http.get<GroupInfo[]>('/api/searchForGroups'+name);
  }

  filterexercise(exercise: string){
    return this.http.get<GroupInfo[]>('/api/filterexercise/'+exercise);
  }

  filtercalories(calories: string){
    return this.http.get<GroupInfo[]>('/api/filtercalories/'+calories);
  }

  getMemberInfo(Name: string ){
    return this.http.get<GroupMemberInfo[]>('/api/members/' +Name);
  }

  JoinGroup(groupname: string, username: string ){
    return this.http.get<GroupMemberInfo[]>('/api/joingroup/' +groupname +'/' +username)
  }
}
