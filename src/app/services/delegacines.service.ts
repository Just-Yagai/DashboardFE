import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
// import { DelegacionesResponse } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  constructor( private http: HttpClient) { }

  // getData(){
  //   const url = 'assets/json/delegaciones.json';
  //   return this.http.get(url);
  // }

  getData(){
    const data = this.getDataLocalStorage();
    if (data) {
      return of(data);
    }else {
      const url = 'assets/json/delegaciones.json';
      return this.http.get(url).pipe(
        tap((resp: any) => {
          this.saveDataToLocalStorage(resp);
        })
      );
    }
  }

  saveDataToLocalStorage(data: any) {
    localStorage.setItem('datosDelegaciones', JSON.stringify(data));
  }

  getDataLocalStorage(){
    const data = localStorage.getItem('datosDelegaciones');
    // console.log('Datos del LocalStorage:', data);
    return data ? JSON.parse(data) : null;
  }
}