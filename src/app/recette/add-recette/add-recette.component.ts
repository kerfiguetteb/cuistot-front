import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent {

  constructor(private formBuilder: FormBuilder){ }

  recettes!: any[];

  recetteForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]]
  })

}
