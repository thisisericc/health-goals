import { Component, OnInit } from '@angular/core';

import {MHArticlesService, MHArticles  } from '../mh-articles.service';

@Component({
  selector: 'app-mh-articles',
  templateUrl: './mh-articles.component.html',
  styleUrls: ['./mh-articles.component.css']
})
export class MhArticlesComponent implements OnInit {


  articles:MHArticles[];
  articletype:string;
  articletopic:string;
  link:string;
  input:string;


  constructor(public articleService:MHArticlesService) { 
    

this.articleService.filterByTopic(this.articletopic).subscribe(
  data => {
    console.log(data)
  }
)
this.articleService.filterByType(this.articletype).subscribe(
  data => {
    console.log(data)
  }
)

  }


  ngOnInit() {
    this.articletopic=undefined;
    this.articletype=undefined;
    this.getArticles();

  }
  getArticles(){
    this.articleService.getArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of articles');
      }
    )
  }

  
}
