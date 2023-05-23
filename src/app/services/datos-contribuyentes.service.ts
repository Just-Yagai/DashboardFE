import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosContribuyentesService {

  constructor(private http: HttpClient) { }

  cargarDatos() {

    const url = 'assets/json/datos.json';
    return this.http.get( url );
    
  }
}
