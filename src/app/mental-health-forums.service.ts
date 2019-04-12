import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MentalHealthForums {
  ForumNumber: string,
  NameOfForum: string;
  Link: string;
  Description: string;
  Topic: string;
}

@Injectable({
  providedIn: 'root'
})

export class MentalHealthForumsService {

  constructor(
    public http: HttpClient
  ) { }

  getForums() {
    return this.http.get<MentalHealthForums[]>('/api/MentalHealthForums');
  }

  getLatestForums() {
    return this.http.get<MentalHealthForums[]>('/api/MentalHealthLatestForums');
  }

  findForum(forum: string) {
    return this.http.get<MentalHealthForums[]>('/api/MentalHealthForums/'+forum);
  }

  filterByTopic(topic: string) {
    return this.http.get<MentalHealthForums[]>('/api/FilterForumByTopic/'+topic);
  }
  
  searchForForums(name: string) {
    return this.http.get<MentalHealthForums[]>('/api/SearchForForum/'+name);
  }

  postForum(name: string, description: string, topic: string) {
    return this.http.get<MentalHealthForums[]>('/api/PostForum/'+name+'/'+description+'/'+topic);
  }

}