import { Component, EventEmitter, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent {

  @Input()
  ingredients!: Ingredient[]

  @Output()
  onRemoveIngredient: EventEmitter<Ingredient> = new EventEmitter()

  @Output()
  onAddIngredient: EventEmitter<Ingredient> = new EventEmitter()

  public remove(element: Ingredient): void 
  {
    console.log(element);
    
    this.onRemoveIngredient.emit(element)
  }

  public add(element: Ingredient): void
  {
    this.onAddIngredient.emit(element)
  }

}
