import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import { IngredientQuantiteService } from 'src/app/service/ingredient-quantite.service';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-add-ingredient-recette',
  templateUrl: './add-ingredient-recette.component.html',
  styleUrls: ['./add-ingredient-recette.component.scss']
})
export class AddIngredientRecetteComponent {

  constructor( private formBuilder: FormBuilder, 
  private recetteService: RecetteService,
  private ingredientQuantiteService: IngredientQuantiteService
 ){ }


  @Input() 
  ingredients!: Ingredient[]

  ingredientQuantite!: IngredientQuantite

  quantite!: IngredientQuantite


  @Input()
  recette!: Recette

  hidden: boolean = true

  quantiteForm: FormGroup = this.formBuilder.group({
    quantite: [, Validators.required]
  })

  
  toggle() {
    this.hidden = !this.hidden;
  }

  private addQuantite(ingredient: Ingredient){
    this.ingredientQuantite = this.quantiteForm.value
    this.ingredientQuantite.nomIngredient = ingredient.nom
    this.ingredientQuantite.ingredient = ingredient

      this.ingredientQuantiteService.createIngredientQuantite(this.ingredientQuantite).subscribe((quantite) => {
        this.quantite = quantite
        this.recette.quantites.push(this.quantite)
        this.recette.ingredients = this.ingredients

        this.recetteService.updateRecette(this.recette).subscribe((recette) => {      
        })
      });
  }

  public onSubmit(ingredient: Ingredient): void{
    if (this.quantiteForm.valid) {
      this.addQuantite(ingredient)
      this.remove(ingredient)
    }
  }

  addIngredient(ingredient: Ingredient){
    this.recette.ingredients.push(ingredient)
    
  }
  
  updateIngredient(element: Ingredient){
    this.ingredients.push(element)    
  }

  remove(ingredient: Ingredient){
      const ingredientFilter = this.ingredients.filter((object => object.id !== ingredient.id))
      this.ingredients = ingredientFilter      
  
  }


  public get form(){
    return this.quantiteForm.controls
  }


}
