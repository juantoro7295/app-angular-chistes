import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  urlBase: string = 'https://v2.jokeapi.dev/joke/Programming?lang=es&amount=1';


  constructor(public http: HttpClient) { }
 /**
  * listar un chiste 
  * @returns Observable
  */
  getChiste():Observable<any>{
    return this.http.get(this.urlBase);
  }
}
