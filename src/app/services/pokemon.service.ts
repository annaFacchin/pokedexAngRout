import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokedex(limit: number, offset: number): Observable<any> {

    let currPage = 1;

    if (offset == undefined) {
      offset = 0;
      currPage = 1;
  } else {
      currPage = (offset / 100) + 1;
  }
    let resp = this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset);
    return resp;
  }

  getDetails(url: string): Observable<any>{
    let resp = this.http.get(url);
    return resp;
  }

}