import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent {

  constructor(private formBuilder: FormBuilder, private recettesService: RecetteService){ }

  @Input()
  recettes!: any[];

  recetteForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required]]
  })

  submitted: boolean = false;

  private addRecette(): void {
    this.recettesService.createRecette(this.recetteForm.value).subscribe((recette) => {
      this.recettes.push(recette); 
    });

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
