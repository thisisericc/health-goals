import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesService {

  private _url = 'https://api.edamam.com/search';
  private app_id = '398ae301';
  private app_key = 'e8be0dadda64231adcee646af7ed8116';

  constructor(private http: HttpClient) {}

  getFoodRecipes(input: string) {
    const _url = this._url + '?' + 'app_id=' + this.app_id + '&app_key=' + this.app_key + '&q=' + input.split(' ').join(', ') + '&to=25';
    // console.log(encodeURI(this._url));
    return this.http.get(encodeURI(_url));
  }
}
