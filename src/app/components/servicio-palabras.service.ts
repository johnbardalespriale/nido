import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioPalabrasService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get('../../assets/json/palabras.json')
  }
}


//https://raw.githubusercontent.com/johnbardalespriale/nido/master/src/assets/json/palabras.json