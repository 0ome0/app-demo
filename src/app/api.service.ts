import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(public http: HttpClient) { }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }


}
