import { Component, OnInit, Input, Output } from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {User, WelcomeService} from '../welcome.service';
import {HttpClientModule} from '@angular/common/http'

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
  user: User[];
  public loggedIn: boolean = false;
  selectedFile: File = null;
  blob: Blob;

  constructor(
    public userService: WelcomeService,
    private router: Router,
    private http: HttpClientModule
  ) { }


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

  get_login(email: string, password: string) {
    this.userService.get_login(email, password).subscribe(
      data => {
        this.user = data;
        localStorage.setItem("loggedIn","true");
        localStorage.setItem("ID", this.user["ID"]);
        console.log("signed in");
        this.loggedIn = true;
        this.refresh();
      },
      error => {
        alert('incorrect username or password');
      }
    );
  }

  logout(){
    localStorage.clear();
    localStorage.setItem("loggedIn", "false");
    this.loggedIn = false;
  }

  refresh(): void {
    window.location.reload();
  }

}
