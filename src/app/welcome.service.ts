import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  ID: number;
  FirstName: String;
  LastName: String;
  Email: String;
  Password: String;
  Goals: String;
  Description: String;
  DietaryRestrictions: String;
  Picture: String;
}

export interface LoggedIn {
  loggedIn: boolean;
}

export interface ID2 {
  ID: number;
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

  // getid(email: String, password: String){
  //   return this.http.get<ID[]>('/api/getid/'+email+'/'+password)
  // }

  sign_up(FirstName: String, LastName: String, Email: String, Password:String, Description:String, Goals: String, DietaryRestrictions: String, Picture: String){
    return this.http.get<User[]>('/api/signup/'+FirstName+'/'+LastName+'/'+Email+'/'+Password+'/'+Description+'/'+Goals+'/'+DietaryRestrictions+'/'+Picture)
  }
}
