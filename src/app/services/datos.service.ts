import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCertificacion } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private http: HttpClient) { }

  getData(){
    const url = 'assets/json/dashboard.json';
    return this.http.get<TipoCertificacion>(url);
  }
}
