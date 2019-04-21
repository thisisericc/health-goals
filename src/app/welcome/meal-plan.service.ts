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

    private _url1 = 'https://api.edamam.com/search';
    private app_id1 = 'c16673c6';
    private app_key1 = '94d86718b1d043d92cf3373b72484d45';

    private _url2 = 'https://api.edamam.com/search';
    private app_id2 = '27e40df6';
    private app_key2 = 'f931d229fa44a2837cbc328aa4e0a589';

    private _url3 = 'https://api.edamam.com/search';
    private app_id3 = '89071f45';
    private app_key3 = '172f0ce905c0ad738adb63c7981b24bf';


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
        const _url = this._url1 + '?' + 'app_id=' + this.app_id1 + '&app_key=' + this.app_key1 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=300&time=0-10&diet=balanced';
        console.log(encodeURI(this._url1));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }
    getmyLunch(input: string) {
        const _url = this._url2 + '?' + 'app_id=' + this.app_id2 + '&app_key=' + this.app_key2 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-500&time=0-30&diet=balanced';
        console.log(encodeURI(this._url2));
        return this.http.get(encodeURI(_url))
            .pipe (
                catchError(this.errorHandler)
            );
    }
    getmyDinner(input: string) {
        const _url = this._url3 + '?' + 'app_id=' + this.app_id3 + '&app_key=' + this.app_key3 + '&q=' + input.split(' ').join(', ') + '&to=1'
            + '&calories=200-600&time=0-50';
        console.log(encodeURI(this._url3));
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
