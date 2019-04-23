import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class FindTherapistService {

  private d=new Date();
  private today=this.d.getUTCFullYear()+'-'+this.d.getUTCMonth()+'-'+this.d.getUTCDate();
  private _url='https://api.betterdoctor.com';
  private app_key='2bd6df991f4d47275948ff4ece06e299';

  constructor(private http: HttpClient) { }
  x = document.getElementById("demo");
  getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            this.x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
  showPosition(position) {
        this.x.innerHTML = position.coords.latitude + ", " + position.coords.longitude; 
    }

  getTherapist(){
    
    const _url=this._url+'/'+'2016-03-01'+'/doctors?specialty_uid=professional-counselor%2Cpsychiatrist%2Cmental-health-counselor&location='+'40.5194845,-74.4556964'+',100&skip=0&limit=100&user_key='+this.app_key;
    console.log(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor&location=34.052235,-118.243683,100&skip=2&limit=10&user_key=2bd6df991f4d47275948ff4ece06e299'));
    return this.http.get(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor,addiction-counselor,adult-psychologist,clinical-child-psychologist,mental-retardation-psychologists,medical-psychologist,group-psychotherapy-psychologist,health-service-psychologist,cognitive-behavioral-psychologist,psychologist,addiction-psychologist,health-psychologist,family-psychologist,occupational-therapist,occupational-therapist-environmental-modification,recreation-therapist,&location=40.5194742,-74.4558448,100&skip=2&limit=50&user_key=2bd6df991f4d47275948ff4ece06e299'))
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getonlyTherapists(){
    const my_url='https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=occupational-therapist%2Coccupational-therapist-environmental-modification%2Crecreation-therapist&location=40.5194742%2C-74.4558448%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=09fd788402c043185e2d8aa505cb01ff';
    console.log(my_url);
    return this.http.get(my_url)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getonlyPsychologists(){
    const my_url="https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=adult-psychologist%2Cclinical-child-psychologist%2Cmental-retardation-psychologists%2Cmedical-psychologist%2Cgroup-psychotherapy-psychologist%2Chealth-service-psychologist%2Ccognitive-behavioral-psychologist%2Cpsychologist%2Caddiction-psychologist%2Chealth-psychologist%2Cfamily-psychologist&location=40.5194742%2C-74.4558448%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=1acf4fc370a08033a801b6bad1cd40d2";
    console.log(my_url);
    return this.http.get(my_url)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getonlyPsychiatrist(){
    const my_url="https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychiatrist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=4148c5f0b800ddd4a9cafd0822547a88";
    return this.http.get(my_url)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getonlyCounselors(){
    const my_url="https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor%2Cmental-health-counselor%2Caddiction-counselor&location=37.773%2C-122.413%2C100&user_location=40.5194742%2C-74.4558448&skip=0&limit=100&user_key=3d2523a7d9df82fbaa616ddc952ccc34";
    return this.http.get(my_url)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getCombined(){
    const my_url="";
    return this.http.get(my_url)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    return throwError(
      error.error
    );
  }

  
}

