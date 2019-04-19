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

  filterByTopic(topic: string) {
    return this.http.get<MHArticles[]>('/api/topics/'+topic);
  }
  
  filterByType(types: string) {
    return this.http.get<MHArticles[]>('/api/type/'+types);
  }
}