import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FindInstructors{
  name:string;
  phone: string;
  address : string;
  zip : string;
  tags : string;
  image_URL : string;
  certifications:string;
  about : string;
  rates : string;
}

@Injectable({
  providedIn: 'root'
})
export class FindInstructorsService {

  constructor(public http: HttpClient) { }

  getInstructor(){
    return this.http.get<FindInstructors[]>('/api/instructors');
  }
  getName(name:string){
    return this.http.get<FindInstructors[]>('/api/name/'+name);
  }

  getAddress(address:string){
    return this.http.get<FindInstructors[]>('/api/address/'+address);
  }
  getZip(zip:string){
    return this.http.get<FindInstructors[]>('/api/zip/'+zip);
  }

  getPhone(phone:string){
    return this.http.get<FindInstructors[]>('/api/phone/'+phone);
  }

  getTags(tags:string){
    return this.http.get<FindInstructors[]>('/api/tags/'+tags);
  }

  getImage(image_URL:string){
    return this.http.get<FindInstructors[]>('/api/image/'+image_URL);
  }

  getAbout(about:string){
    return this.http.get<FindInstructors[]>('/api/about/'+about);
  }

  getRates(rates:string){
    return this.http.get<FindInstructors[]>('/api/rates/'+rates);
  }
}
