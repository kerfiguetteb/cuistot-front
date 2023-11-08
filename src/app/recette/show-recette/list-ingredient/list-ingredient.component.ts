import { Component, EventEmitter, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
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

  quantite: IngredientQuantite = new IngredientQuantite()


    /**
   * cette fonction filtre les ingredients en fonction des ingredients de la recette 
   */
    public filterIngredient(){
      this.recette.quantites.forEach((ingredientquantite) => {
        this.ingredientFilter(ingredientquantite.ingredient.id)
      })
      
    }
  

  /**
   * recuperation de l'objet de l'événement
   * suppression de l'objet
   * filtrage du tableau de l'ingredients
   * @param ingredient 
   */
  public remove(ingredient: Ingredient): void
  {
    this.deleteIngredient(ingredient)
    this.ingredientFilter(ingredient.id)

  }

  /**
   * filtrage des ingredients
   * @param id 
   */
  private ingredientFilter(id: number):void
  {
    const ingredientFilter = this.ingredients.filter((o => o.id !== id))
    this.ingredients = ingredientFilter
  }


  /**
   * supression de l'ingredient
   * @param ingredient 
   */
  private deleteIngredient(ingredient: Ingredient): void
  {
    this.ingredientService.deleteIngredient(ingredient.id).subscribe()
  }

  public add(ingredient: Ingredient): void
  {
    this.addIngredientOfRecette(ingredient)
    this.ingredientFilter(ingredient.id)
  }

  private addIngredientOfRecette(ingredient: Ingredient): void
  {
    this.quantite.ingredient = ingredient
    this.ingredientquantite.createIngredientQuantite(this.quantite).subscribe()
    this.recette.quantites.push(this.quantite)
    this.recetteService.updateRecette(this.recette).subscribe()
  }


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
