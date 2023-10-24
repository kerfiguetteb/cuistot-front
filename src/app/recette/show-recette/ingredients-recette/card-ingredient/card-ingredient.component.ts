import { Component, Input } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-card-ingredient',
  templateUrl: './card-ingredient.component.html',
  styleUrls: ['./card-ingredient.component.scss']
})
export class CardIngredientComponent {

  constructor(private recetteService: RecetteService){}

  @Input()
  recette!: Recette

  // cette fonction filtre
 public remove(ingredient: IngredientQuantite) : void
 {
    const ingredientFilter = this.recette.quantites.filter((object => object.id !== ingredient.id))
    this.recette.quantites = ingredientFilter
    this.recetteService.updateRecette(this.recette).subscribe()
  }



}
