import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';
import Ingredient from '../models/ingredient.model';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) {}

  ingredients!: Ingredient[]

  onRemove(ingredient: Ingredient){
    // filtrage des ingredients
    const ingredientFilter = this.ingredients.filter((object => object.id !== ingredient.id))
    this.ingredients = ingredientFilter
    this.ingredientService.deleteIngredient(ingredient.id).subscribe()
    
  }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients
    })
  }

}
