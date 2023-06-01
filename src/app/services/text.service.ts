import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private url = 'assets/json/text.json';

  constructor(private http: HttpClient) {}

  getCertificaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
