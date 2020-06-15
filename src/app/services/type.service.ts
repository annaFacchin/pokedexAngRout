import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  public getTypes(): Observable<any> {
    let resp = this.http.get('https://pokeapi.co/api/v2/type');
    return resp;
    
  }

  getByType(typeName: string): Observable<any> {
    let resp = this.http.get('https://pokeapi.co/api/v2/type/' + typeName);
    return resp;
  }
}
