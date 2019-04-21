import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MHArticles {
  Author: string,
  ArticleName: string;
  Link: string;
  Year: string;
  Topic: string;
}

@Injectable({
  providedIn: 'root'
})

export class MHArticlesService {

  constructor(
    public http: HttpClient
  ) { }

  getArticles() {
    return this.http.get<MHArticles[]>('/api/articles');
  }

  findArticles(name: string) {
    return this.http.get<MHArticles[]>('/api/articles/'+ name);
  }

  filterByType(types: string) {
    return this.http.get<MHArticles[]>('/api/type/'+types);

  }
  filterByTopic(topics: string) {
    return this.http.get<MHArticles[]>('/api/topic/'+topics);

  }
  filterByYear(years: string) {
    return this.http.get<MHArticles[]>('/api/year/'+years);

  }
  filterByGreat(greats: string) {
    return this.http.get<MHArticles[]>('/api/great/'+greats);

  }
  filterByLess(lesss: string) {
    return this.http.get<MHArticles[]>('/api/less/'+lesss);

  } 
  searchArticles(aname: string) {
    return this.http.get<MHArticles[]>('/api/SearchArticles/'+aname);

  } 
  getRecent(ids:string, recent:string){
    return this.http.get<MHArticles[]>('/api/recent/'+ids+'/'+recent)
  }
  writeRecent(writes:string){
    return this.http.get<MHArticles[]>('/api/write/'+writes)
  }

}