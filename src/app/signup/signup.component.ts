import { Component, OnInit } from '@angular/core';
import {User, WelcomeService} from '../welcome.service';
import {WelcomeComponent} from '../welcome/welcome.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User[]
  constructor(
    public signupService :WelcomeService
    
  ) { }

  ngOnInit() {
  }

  sign_up(FirstName: String, LastName: String, Email: String, Password:String, Description:String, Goals: String, DietaryRestrictions: String, Picture: String) {
    this.signupService.sign_up(FirstName, LastName, Email, Password, Description, Goals, DietaryRestrictions, Picture).subscribe(
      data => {
        this.user = data;
        alert('Signed Up!');
      },
      error => {
        alert('Error Signing Up');
      }
    );
  }

}