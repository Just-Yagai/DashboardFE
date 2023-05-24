import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosContribuyentesService {

  private apiUrl = 'assets/json/datos.json';

  constructor(private http: HttpClient) { }

  buscarContribuyentes(rnc: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?rnc=${rnc}`);
  }

  cargarDatos() {

    const url = 'assets/json/datos.json';
    return this.http.get( url );
    
  }
}
