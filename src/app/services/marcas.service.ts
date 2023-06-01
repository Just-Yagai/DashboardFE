import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { responseMarcas } from '../models/reqres-response';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor( private http: HttpClient) { }

  // private datosMarcas: any = [];

  // getData(): Observable<any>{
  //   const url = 'assets/json/marcas.json';
  //   return this.http.get(url).pipe(
  //     tap(resp => {
  //       this.datosMarcas = resp;
  //     })
  //   )
  // }

  // updateData(marca: any): Observable<any> {
  //   return of(marca).pipe(
  //     tap(marcaActualizada => {
  //       const index = this.datosMarcas.findIndex((m: { rnc: any; }) => m.rnc === marcaActualizada.rnc);
  //       if(index !== -1){
  //         this.datosMarcas[index] = marcaActualizada;
  //       }
  //     })
  //   )
  // }

  getData(){
    const url = 'assets/json/marcas.json';
    return this.http.get( url );
  }

  // actualizarMarca(){}

  // getData(): Observable<any> {
  //   const url = 'assets/json/marcas.json';
  //   return this.http.get(url);
  // }

  // actualizarMarca(marca: any): Observable<any> {
  //   const url = 'assets/json/marcas.json';
  //   return this.http.put(url, marca);
  // }

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
