import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ingredient from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {

  constructor( private formBuilder: FormBuilder, private ingredientService: IngredientService ){ }

  @Input()
  ingredients!: Ingredient[]

  @Output()
  onIngredient: EventEmitter<Ingredient> = new EventEmitter()

  ingredientForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required]
  })

  submitted: boolean = false;

  private addIngredient(): void {
    this.ingredientService.createIngredient(this.ingredientForm.value).subscribe((ingredient) => {
      this.ingredients.push(ingredient); 
      
    });
    this.onIngredient.emit(this.ingredientForm.value)

    this.ingredientForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.ingredientForm.valid) {
      this.addIngredient();
    }
  }

  public get form(){
    return this.ingredientForm.controls
  }

}
