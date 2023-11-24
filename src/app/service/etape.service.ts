import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Etape from '../models/etape.model';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getEtapes(): Observable<Etape[]>{
    return this.httpClient.get<Etape[]>(`${this.apiUrl}/etapes`)
  }

  getEtape(id: number): Observable<Etape>{
    return this.httpClient.get<Etape>(`${this.apiUrl}/etapes/${id}`)
  }

  createEtape(etape: Etape): Observable<Etape>{
    return this.httpClient.post<Etape>(`${this.apiUrl}/etapes`, etape)
  }

  updateEtape(etape: Etape): Observable<Etape>{
    return this.httpClient.put<Etape>(`${this.apiUrl}/etapes/${etape.id}`, etape)
  }

  deleteEtape(id: number): Observable<Etape>{
    return this.httpClient.delete<Etape>(`${this.apiUrl}/etapes/${id}`)
  }

}
