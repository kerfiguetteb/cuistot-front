import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent {

  constructor(private formBuilder: FormBuilder){ }



  recetteForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]],
    ustensiles:[[]],
    quantites:[[]],
    etapes:[[]]
  })

  @Output()
  onRecette: EventEmitter<Recette> = new EventEmitter();

  submitted: boolean = false;

  private addRecette(): void {  
    this.onRecette.emit(this.recetteForm.value)
    this.recetteForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.recetteForm.valid) {
      this.addRecette();
    }
  }

  public get form(){
    return this.recetteForm.controls
  }

}
