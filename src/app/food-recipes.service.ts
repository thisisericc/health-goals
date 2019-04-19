import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesService {

  private _url = 'https://api.edamam.com/search';
  private app_ids = ['398ae301', '3f4dd5fb', '2f7143dd'];
  private app_keys = ['e8be0dadda64231adcee646af7ed8116', '5c0f10c58fc253db198f5c29645e6b4f', 'ba8ffcc43f11094e3a710afa48ca271f'];
  private app_id = '398ae301';
  private app_key = 'e8be0dadda64231adcee646af7ed8116';
  private idx = 0;

  constructor(private http: HttpClient) {}

  getFoodRecipes(input: string) {
    this.app_id = this.app_ids[this.idx];
    this.app_key = this.app_keys[this.idx];
    const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=100';
    //console.log(encodeURI(this._url));
    const response = this.http.get(encodeURI(_url));
    console.log(JSON.stringify(response));
    console.log(JSON.stringify(response).length);
    if(JSON.stringify(response) == null) {
      console.log('isnull');
    }
    return response
            .pipe (
              //this.getFoodRecipes(input, (idx + 1) % this.app_ids.length)
              catchError(this.errorHandler)
            );
  }

  getBreakfast(input: string) {
    const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
    + '&time=10&calories=400&diet=balanced';
    //console.log(encodeURI(this._url));
    return this.http.get(encodeURI(_url))
            .pipe (
              catchError(this.errorHandler)
            );
  }

  getLunch(input: string) {
      const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
      + '&time=5-20&calories=400-700&diet=balanced';
      //console.log(encodeURI(this._url));
      return this.http.get(encodeURI(_url))
              .pipe (
                catchError(this.errorHandler)
              );
  }

  getDinner(input: string) {
      const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
      + '&time=10-25&calories=600-1300&diet=balanced';
      //console.log(encodeURI(this._url));
      return this.http.get(encodeURI(_url))
          .pipe (
              catchError(this.errorHandler)
          );
  }

  getSnack(input: string) {
      const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
      + '&time=0-5&calories=250&diet=balanced';
      //console.log(encodeURI(this._url));
      return this.http.get(encodeURI(_url))
          .pipe (
              catchError(this.errorHandler)
          );
  }

  getDrink(input: string) {
    input = input + ' drink';
    const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25'
    + '&time=0-5&calories=250&ingr=5';
    //console.log(encodeURI(this._url));
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

  /*
  private errorHandler2(input: string, idx: number) {
    return throwError(
      this.getFoodRecipes(input, idx + 1)
    );
  }
  */
}
