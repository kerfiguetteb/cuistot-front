import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private ingredientService: IngredientService) {}

  ingredients!: any[]

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients
    })
  }
}
