import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss' ]
})
export class CardComponent {

  constructor(private formBuilder: FormBuilder) { }

  quantiteForm: FormGroup = this.formBuilder.group({
    quantite:['', [Validators.required]],
    ingredient:[]
  })

  @Input()
  object!: Recette | Ingredient | Ustensile

  @Input()
  detail!: string

  @Output()
  onRemoveObject: EventEmitter<any> = new EventEmitter()

  @Output()
  onAddObject: EventEmitter<any> = new EventEmitter()

  submitted: boolean = false;


  /**
   * ecouteur d'evenement qui envoi l'objet au parent
   * @param element 
   */
  public remove(element: Recette | Ingredient | Ustensile): void
  {
    this.onRemoveObject.emit(element)

  }

    /**
   * ecouteur d'evenement qui envoi l'objet au parent
   * @param element 
   */
  public add(element: Recette | Ingredient | Ustensile | IngredientQuantite){

    if (this.detail === 'ingredientQuantites') {
      this.quantiteForm.value.ingredient = element
      this.onAddObject.emit(this.quantiteForm.value)
      this.quantiteForm.reset()
      this.submitted = false
    }else{

      this.onAddObject.emit(element)
    }

  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.quantiteForm.valid && this.detail === 'ingredientQuantites') {
      this.add(this.object);
    }
  }

  public get form(){
    return this.quantiteForm.controls
  }


  

}
