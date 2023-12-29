import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Recette from '../models/recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getRecettes(): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(`${this.apiUrl}/recettes`)
  }

  getRecette(id: number): Observable<Recette>{
    return this.httpClient.get<Recette>(`${this.apiUrl}/recettes/${id}`)
  }

  createRecette(recette: Recette): Observable<Recette>{
    return this.httpClient.post<Recette>(`${this.apiUrl}/recettes`, recette)
  }

  updateRecette(recette: Recette): Observable<Recette>{
    return this.httpClient.put<Recette>(`${this.apiUrl}/recettes/${recette.id}`, recette)
  }

  deleteRecette(id: number): Observable<Recette>{
    return this.httpClient.delete<Recette>(`${this.apiUrl}/recettes/${id}`)
  }

  recetteByName(name: string): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(`${this.apiUrl}/recettes?nom=${name}`)
  }

  recetteByType(name: string): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(`${this.apiUrl}/recettes?type=${name}`)
  }

  recetteByUser(id: number): Observable<Recette[]>{
    return this.httpClient.get<Recette[]>(`${this.apiUrl}/recettes/find-by-user-${id}`)
  }

  
}
