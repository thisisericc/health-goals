import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesSuggestionsService {

  private _url = 'http://api.edamam.com/auto-complete';
  private app_id = '1f302d04';
  private app_key = '66efd9eae9211103611d7e48705766a7';

  constructor(private http: HttpClient) {}

  getFoodSuggestions(input: string) {
    const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&limit=10';
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
