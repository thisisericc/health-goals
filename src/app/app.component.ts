
import { Component } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loggedIn: boolean = false;
  title = 'Health Goals';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
      localStorage.clear();
      localStorage.setItem("loggedIn", "false");
    }
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

