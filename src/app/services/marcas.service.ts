import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseMarcas } from '../models/reqres-response';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor( private http: HttpClient) { }

  getData(){
    const url = 'assets/json/marcas.json';
    return this.http.get<responseMarcas>( url );
  }

  // getData(){
  //   const data = this.getDataLocalStorage();
  //   if (data) {
  //     return of(data);
  //   }else {
  //     const url = 'assets/json/marcas.json';
  //     return this.http.get(url).pipe(
  //       tap((resp: any) => {
  //         this.saveDataToLocalStorage(resp);
  //       })
  //     );
  //   }
  // }

  // saveDataToLocalStorage(data: any) {
  //   localStorage.setItem('marcas', JSON.stringify(data));
  // }

  // getDataLocalStorage(){
  //   const data = localStorage.getItem('marcas');
  //   console.log('Datos del LocalStorage:', data);
  //   return data ? JSON.parse(data) : null;
  // }
}
