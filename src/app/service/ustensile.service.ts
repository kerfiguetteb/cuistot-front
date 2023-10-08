import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Ustensile from '../models/ustensile.model';

@Injectable({
  providedIn: 'root'
})
export class UstensileService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getUstensiles(): Observable<Ustensile[]>{
    return this.httpClient.get<Ustensile[]>(`${this.apiUrl}/ustensiles`)
  }

  getUstensile(id: number): Observable<Ustensile>{
    return this.httpClient.get<Ustensile>(`${this.apiUrl}/ustensiles/${id}`)
  }

  createUstensile(ustensile: Ustensile): Observable<Ustensile>{
    return this.httpClient.post<Ustensile>(`${this.apiUrl}/ustensiles`, ustensile)
  }

  updateUstensile(ustensile: Ustensile): Observable<Ustensile>{
    return this.httpClient.put<Ustensile>(`${this.apiUrl}/ustensiles/${ustensile.id}`, ustensile)
  }

  deleteUstensile(id: number): Observable<Ustensile>{
    return this.httpClient.delete<Ustensile>(`${this.apiUrl}/ustensiles/${id}`)
  }


}
