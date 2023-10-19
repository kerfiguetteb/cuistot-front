import { Component, Input } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-list-ingredient-recette',
  templateUrl: './list-ingredient-recette.component.html',
  styleUrls: ['./list-ingredient-recette.component.scss']
})
export class ListIngredientRecetteComponent {

  @Input()
  ingredients!: Ingredient[]

}
