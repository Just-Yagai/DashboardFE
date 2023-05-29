import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { SecuenciasResponse } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  constructor( private http: HttpClient) { }

  getData(){
    const url = 'assets/json/secuencias.json';
    return this.http.get(url);
  }

}