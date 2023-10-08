import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Ingredient from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getIngredients(): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(`${this.apiUrl}/ingredients`)
  }

  getIngredient(id: number): Observable<Ingredient>{
    return this.httpClient.get<Ingredient>(`${this.apiUrl}/ingredients/${id}`)
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient>{
    return this.httpClient.post<Ingredient>(`${this.apiUrl}/ingredients`, ingredient)
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient>{
    return this.httpClient.put<Ingredient>(`${this.apiUrl}/ingredient/${ingredient.id}`, ingredient)
  }

  deleteIngredient(id: number): Observable<Ingredient>{
    return this.httpClient.delete<Ingredient>(`${this.apiUrl}/ingredients/${id}`)
  }


}
