import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FindInstructors{
  Name:string;
  Number: string;
  Address : string;
  Zip : string;
  Tags : string;
  Image_URL : string;
  Certification:string;
  About : string;
  Rates : string;
  uri_name:string;
}

@Injectable({
  providedIn: 'root'
})
export class FindInstructorsService {

  constructor(public http: HttpClient) { }

  getInstructor(){
    return this.http.get<FindInstructors[]>('/api/instructors');
  }
  findInstructor(name:string){
    return this.http.get<FindInstructors[]>('/api/instructors/'+name);
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

  getCertifications(certifications:string){
    return this.http.get<FindInstructors[]>('/api/certifications/'+certifications);
  }
}
