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

  message!: boolean



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

  /**
   * ajout/filtrage des ingredient dans la recette
   */
  public add(quantite: IngredientQuantite): void
  {
    // Ajout de la quantité dans la recette
    this.addIngredientOfRecette(quantite)
    
    this.ingredientFilter(quantite.ingredient.id)

  }

  /**
   * Ajout/enregistrement des ingredient avec la quantite dans la recette
   * @param ingredient 
   */
  private addIngredientOfRecette(quantite: IngredientQuantite): void
  {
    // creation de la quantité
    this.ingredientquantite.createIngredientQuantite(quantite).subscribe((quantite) => {
      // ajout de la quantité dans la recette
      this.recette.quantites.push(quantite)
      this.recetteService.updateRecette(this.recette).subscribe()
    })
  }


  /**
   * recupération de l'evenement, ajout ingredient dans le tableau d'ingredients et sauvegarde de l'ingredients
   * @param ingredient 
   */
  public getIngredientForm(ingredient: Ingredient): void
  {
    this.addIngredient(ingredient)
  }

  /**
   * enregistrement de l'ingredient et ajout de l'ingredient dans le tableau des ingredients
   * @param ingredient 
   */
  private addIngredient(ingredient: Ingredient): void
  {
    this.ingredientService.createIngredient(ingredient).subscribe((ingredient) => 
    {
      this.ingredients.push(ingredient)
    })
    this.message = true

  }

}
