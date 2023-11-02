import { Component, EventEmitter, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {

  @Input()
  ingredients!: Ingredient[]

  @Output()
  onRemoveIngredient: EventEmitter<Ingredient> = new EventEmitter()

  @Output()
  onAddIngredient: EventEmitter<Ingredient> = new EventEmitter()

  // fonction qui remonte l'ingredient au composant parent pour modifier la recette
  public remove(element: Ingredient){
   this.onRemoveIngredient.emit(element)
  }

  // fonction qui remonte l'ingredient au composant parent pour ajouter la recette
  public add(element: Ingredient): void
  {
    this.onAddIngredient.emit(element)
  }



}
