import { Component, EventEmitter, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import Recette from 'src/app/models/recette.model';
import { IngredientQuantiteService } from 'src/app/service/ingredient-quantite.service';
import { IngredientService } from 'src/app/service/ingredient.service';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent {

  constructor(
    private ingredientService: IngredientService,
    private ingredientquantite: IngredientQuantiteService,
    private recetteService: RecetteService
    ) {}

  @Input()
  ingredients!: Ingredient[]

  @Input ()
  recette!: Recette


    /**
   * cette fonction filtre les ingredients en fonction des ingredients de la recette 
   */
    public filterUstensile(){
      this.recette.quantites.forEach((ingredientquantite) => {
        const ingredientFilter = this.ingredients.filter((ingredient => ingredient.id !== ingredientquantite.ingredient.id))
        this.ingredients = ingredientFilter
      })
      
    }
  

  public remove(ingredient: Ingredient): void
  {

  }

  public add(ingredient: Ingredient): void
  {}


  /**
   * recupération de l'evenement, ajout ingredient dans le tableau d'ingredients et sauvegarde de l'ingredients
   * @param ingredient 
   */
  public getIngredientForm(ingredient: Ingredient): void
  {
    this.ingredients.push(ingredient)
    this.addIngredient(ingredient)
  }

  /**
   * enregistrement de l'ingredient 
   * @param ingredient 
   */
  private addIngredient(ingredient: Ingredient): void
  {
    this.ingredientService.createIngredient(ingredient).subscribe()
  }

}
