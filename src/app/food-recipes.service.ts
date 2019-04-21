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

  constructor(private http: HttpClient) {}

  getFoodRecipes(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[0];
    const app_key = this.app_keys[0];
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100';
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
    return this.http.get(encodeURI(_url))
            .pipe (
              catchError(this.errorHandler)
            );
  }

  getBreakfast(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[1];
    const app_key = this.app_keys[1];
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
    + '&time=10&calories=400';
    //console.log(encodeURI(this._url));
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    } else {
      _url = _url + '&diet=balanced';
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
    return this.http.get(encodeURI(_url))
            .pipe (
              catchError(this.errorHandler)
            );
  }

  getLunch(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[1];
    const app_key = this.app_keys[1];
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
    + '&time=5-20&calories=400-700';
    //console.log(encodeURI(this._url));
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    } else {
      _url = _url + '&diet=balanced';
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
    return this.http.get(encodeURI(_url))
            .pipe (
              catchError(this.errorHandler)
            );
  }

  getDinner(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[2];
    const app_key = this.app_keys[2];
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
    + '&time=10-25&calories=600-1300';
    //console.log(encodeURI(this._url));
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    } else {
      _url = _url + '&diet=balanced';
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
    return this.http.get(encodeURI(_url))
        .pipe (
            catchError(this.errorHandler)
        );
  }

  getSnack(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[2];
    const app_key = this.app_keys[2];
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
    + '&time=0-5&calories=250';
    //console.log(encodeURI(this._url));
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    } else {
      _url = _url + '&diet=balanced';
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
    return this.http.get(encodeURI(_url))
        .pipe (
            catchError(this.errorHandler)
        );
  }

  getDrink(input: string, dietFilters: string[], healthFilters: string[]) {
    const app_id = this.app_ids[2];
    const app_key = this.app_keys[2];
    input = input + ' drink';
    let _url = this._url + '?' + 'app_id=' + app_id + '&app_key=' + app_key + '&q=' + input.split(' ').join(', ') + '&to=100'
    + '&time=0-5&calories=250&ingr=5';
    //console.log(encodeURI(this._url));
    if(dietFilters.length > 0) {
      _url = _url + '&diet=' + dietFilters.join('&diet=');
    }
    if(healthFilters.length > 0) {
      _url = _url + '&health=' + healthFilters.join('&health=');
    }
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
