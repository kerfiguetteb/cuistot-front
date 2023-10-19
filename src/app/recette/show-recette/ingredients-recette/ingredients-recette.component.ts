import { Component, Input } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-ingredients-recette',
  templateUrl: './ingredients-recette.component.html',
  styleUrls: ['./ingredients-recette.component.scss']
})
export class IngredientsRecetteComponent {

  @Input()
  ingredients!: Ingredient[]

  @Input()
  recette!: Recette

  
  

}
