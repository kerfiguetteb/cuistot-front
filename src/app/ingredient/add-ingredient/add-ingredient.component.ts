import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {

  constructor( private formBuilder: FormBuilder, private ingredientService: IngredientService ){ }

  ingredients!: any[]

  ingredientForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required]
  })

  submitted: boolean = false;

  private addIngredient(): void {
    this.ingredientService.createIngredient(this.ingredientForm.value);
    this.ingredients.push(this.ingredientForm.value);
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
