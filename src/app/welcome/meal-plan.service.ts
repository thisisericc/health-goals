import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MealPlanService {

    private _url = 'https://api.edamam.com/search';
    private app_id = '398ae301';
    private app_key = 'e8be0dadda64231adcee646af7ed8116';
  
    constructor(private http: HttpClient) {}

    getBreakfast(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
        + '&calories=300&time=0-10&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }

    getmyBreakfast(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=300&time=0-10&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }
    getmyLunch(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-500&time=0-30&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }
    getmyDinner(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-600&time=0-50';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }

   // getBreakfast(input: string) {
    //  const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
     // + '&time=0-10&calories=400&diet=balanced';
    //  console.log(encodeURI(this._url));
     // return this.http.get(encodeURI(_url))
  //            .pipe (
   //             catchError(this.errorHandler)
     //         );
  //  }

    getLunch(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
        + '&time=5-20&calories=400-700&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
                .pipe (
                  catchError(this.errorHandler)
                );
    }

    getDinner(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
        + '&time=0-25&calories=600-1300&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }

    getSnack(input: string) {
        const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
        + '&time=0-5&calories=250&diet=balanced';
        console.log(encodeURI(this._url));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }
  
    private errorHandler(error: HttpErrorResponse) {
      return throwError(
        error.error
      );
    }
   
}
