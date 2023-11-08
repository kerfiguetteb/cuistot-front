import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ingredient from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent {

  constructor(private formBuilder: FormBuilder) {}

  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }

  submitted: boolean = false


  @Output()
  onIngredient: EventEmitter<Ingredient> = new EventEmitter()

  ingredientForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required]
  })

  private addIngredient(): void {
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
