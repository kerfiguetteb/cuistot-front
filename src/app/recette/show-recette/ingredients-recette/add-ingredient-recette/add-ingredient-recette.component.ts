import { Component, Input } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-add-ingredient-recette',
  templateUrl: './add-ingredient-recette.component.html',
  styleUrls: ['./add-ingredient-recette.component.scss']
})
export class AddIngredientRecetteComponent {

  @Input() 
  ingredients!: Ingredient[]

  @Input()
  recette!: Recette

  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }

  addIngredient(ingredient: Ingredient){
    this.recette.ingredients.push(ingredient)
    console.log(this.recette);
    
  }

}
