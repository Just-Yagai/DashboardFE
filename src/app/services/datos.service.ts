import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, tap } from 'rxjs';
// import { TipoCertificacion } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor( private http: HttpClient) { }

  getData(){
    const url = 'assets/json/dashboard.json';
    return this.http.get(url);
  }

  // getData() {
  //   const url = 'assets/json/dashboard.json';
  //   return this.http.get(url).pipe(
  //     tap(data => console.log(data)),
  //     catchError(error => {
  //       console.error('Error al obtener los datos:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
}
