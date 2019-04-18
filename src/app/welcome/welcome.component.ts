import { Component, OnInit, Input, Output } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {User, WelcomeService, LoggedIn} from '../welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  
  email: string;
  password: string;
  id2: number;
  logged: string[];
  user: User[]
  public loggedIn: boolean = false;

  constructor(
    public userService: WelcomeService,
    private router: Router
  ) { }

  get_login(email: string, password: string) {
    this.userService.get_login(email, password).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        // this.router.navigate(["mh-forums"]);
        alert("logged in");
        this.loggedIn = true;
      },
      error => {
        alert('incorrect username or password');
      }
    );
  }
  
  ngOnInit() {
  }
}
