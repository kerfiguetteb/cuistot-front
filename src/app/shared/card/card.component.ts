import { Component, EventEmitter, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  object!: Recette | Ingredient | Ustensile

  @Input()
  detail!: string

  @Output()
  onRemoveObject: EventEmitter<any> = new EventEmitter()

  @Output()
  onAddObject: EventEmitter<any> = new EventEmitter()

  /**
   * ecouteur d'evenement qui envoi l'objet au parent
   * @param element 
   */
  public remove(element: Recette | Ingredient | Ustensile): void
  {
    this.onRemoveObject.emit(element)
    

  }

    /**
   * ecouteur d'evenement qui envoi l'objet au parent
   * @param element 
   */
  public add(element: Recette | Ingredient | Ustensile | IngredientQuantite){
    this.onAddObject.emit(element)
  }

  

}
