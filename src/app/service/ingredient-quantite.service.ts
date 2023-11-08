import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IngredientQuantite from '../models/ingredientQuantite.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientQuantiteService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getIngredientQuantites(): Observable<IngredientQuantite[]>{
    return this.httpClient.get<IngredientQuantite[]>(`${this.apiUrl}/ingredientQuantites`)
  }
  getIngredientQuantite( id: number): Observable<IngredientQuantite>{
    return this.httpClient.get<IngredientQuantite>(`${this.apiUrl}/ingredientQuantites/${id}`)
  }
  createIngredientQuantite( ingredientQuantite: IngredientQuantite): Observable<IngredientQuantite>{
    return this.httpClient.post<IngredientQuantite>(`${this.apiUrl}/ingredientQuantites`, ingredientQuantite)
  }

  updateIngredientQuantite( ingredientQuantite: IngredientQuantite): Observable<IngredientQuantite>{
    return this.httpClient.put<IngredientQuantite>(`${this.apiUrl}/ingredientQuantites/${ingredientQuantite.id}`, ingredientQuantite)
  }

  patchIngredientQuantite( ingredientQuantite: IngredientQuantite): Observable<IngredientQuantite>{
    return this.httpClient.patch<IngredientQuantite>(`${this.apiUrl}/ingredientQuantites/${ingredientQuantite.id}`, ingredientQuantite)
  }

  deleteIngredientQuantite( id: number): Observable<IngredientQuantite>{
    return this.httpClient.delete<IngredientQuantite>(`${this.apiUrl}/ingredientQuantites/${id}`)
  }

}
