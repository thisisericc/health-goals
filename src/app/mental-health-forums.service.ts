import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface MentalHealthForums {
  ForumNumber: string,
  NameOfForum: string;
  Link: string;
  Email: string;
  Description: string;
  Topic: string;
}

export interface MentalHealthForumReplies {
  ForumNumber: string,
  NameOfForum: string;
  ForumReplyNumber: string,
  Description: string;
  Email: string;
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

  postForum(useremail:string, name: string, description: string, topic: string) {
    return this.http.get<MentalHealthForums[]>('/api/PostForum/'+useremail+'/'+name+'/'+description+'/'+topic);
  }

  getReplies(name: string) {
    return this.http.get<MentalHealthForumReplies[]>('/api/ForumReplies/'+name);
  }

  addReply(useremail: string, name: string, reply: string) {
    return this.http.get<MentalHealthForums[]>('/api/AddReply/'+useremail+'/'+name+'/'+reply);
  }

}