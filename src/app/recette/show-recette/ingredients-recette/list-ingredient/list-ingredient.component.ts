import { Component, Input } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss']
})
export class ListIngredientComponent {

  @Input()
  recette!: Recette

}
