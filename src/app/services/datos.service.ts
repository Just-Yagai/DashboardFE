import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoCertificacion } from '../models/dashboard';
import { catchError, throwError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private http: HttpClient) { }

  // getData(){
  //   const url = 'assets/json/dashboard.json';
  //   return this.http.get<TipoCertificacion>(url);
  // }

  getData() {
    const url = 'assets/json/dashboard.json';
    return this.http.get(url).pipe(
      tap(data => console.log(data)),
      catchError(error => {
        console.error('Error al obtener los datos:', error);
        return throwError(error);
      })
    );
  }
  
}
