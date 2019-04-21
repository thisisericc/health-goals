import { Component, OnInit } from '@angular/core';

import {MHArticlesService, MHArticles  } from '../mh-articles.service';
import {User, WelcomeService} from '../welcome.service';
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
  articleyear:string;
  articleyearg:string;
  articleyearl:string;
  articlename:string;
  ids:string;
  recents:string;

  constructor(public articleService:MHArticlesService) { 
    

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
  
  filterByType(articletype:string){
    this.articleService.filterByType(articletype).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of types');
      }
    )
  }
  filterByTopic(articletopic:string){
    this.articleService.filterByTopic(articletopic).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of topics');
      }
    )
  }
  filterByYear(articleyear:string){
    this.articleService.filterByYear(articleyear).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of year');
      }
    )
  }
  filterByGreat(articleyearg:string){
    this.articleService.filterByGreat(articleyearg).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of year');
      }
    )
  } 
  filterByLess(articleyearl:string){
    this.articleService.filterByLess(articleyearl).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of year');
      }
    )
  } 
  searchArticles(articlename:string){
    this.articleService.searchArticles(articlename).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of name');
      }
    )
  } 
  getRecent(ids:string,recents:string){
    this.articleService.getRecent(ids,recents).subscribe(
      data => {
        this.articles = data;
      },
      error => {
        alert ('Could not retrieve a list of recents');
      }
    )
  }

}