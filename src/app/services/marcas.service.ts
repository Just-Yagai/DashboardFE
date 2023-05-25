import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor( private http: HttpClient) { }

  getData(){
    const url = 'assets/json/marcas.json';
    // return this.http.get<Marca>( url );
    return this.http.get( url );

  }
}
