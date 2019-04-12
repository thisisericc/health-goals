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
    
    const _url=this._url+'/'+'2016-03-01'+'/doctors?specialty_uid=professional-counselor%2Cpsychiatrist%2Cmental-health-counselor&location='+'40.5194845,-74.4556964'+',100&skip=0&limit=10&user_key='+this.app_key;
    console.log(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor&location=40.5194845,-74.4556964,100&skip=2&limit=10&user_key=2bd6df991f4d47275948ff4ece06e299'));
    debugger
    return this.http.get(encodeURI('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=professional-counselor,psychiatrist,mental-health-counselor&location=40.5194845,-74.4556964,100&skip=2&limit=10&user_key=2bd6df991f4d47275948ff4ece06e299'))
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

