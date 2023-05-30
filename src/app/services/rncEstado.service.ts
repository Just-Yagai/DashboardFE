import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {

  constructor(private http: HttpClient) { }
  
  // cargarDatos() {

  //   const url = 'assets/json/rncEstado.json';
  //   return this.http.get( url );
    
  // }

  getData(){
    const data = this.getDataLocalStorage();
    if (data) {
      return of(data)
    } else {
      const url = 'assets/json/rncEstado.json';
      return this.http.get(url).pipe(
        tap((resp: any) => {
          this.saveDataToLocalStorage(resp);
        })
      );
    }
  }

  saveDataToLocalStorage(data: any) {
    localStorage.setItem('datosrncEstado', JSON.stringify(data));
  }

  getDataLocalStorage() {
    const data = localStorage.getItem('datosrncEstado');
    return data ? JSON.parse(data) : null;
  }
}

// https://www.youtube.com/watch?v=WtPY-JHczPM