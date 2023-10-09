import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ustensile from 'src/app/models/ustensile.model';
import { UstensileService } from 'src/app/service/ustensile.service';

@Component({
  selector: 'app-add-ustensile',
  templateUrl: './add-ustensile.component.html',
  styleUrls: ['./add-ustensile.component.scss']
})
export class AddUstensileComponent {

  constructor(private ustensileService: UstensileService, private formBuilder: FormBuilder ) {}

  @Input()
  ustensiles!: Ustensile[]

  ustensileForm : FormGroup = this.formBuilder.group({
    nom: ['', Validators.required]
  })

  submitted: boolean = false;
  
  private addUstensile(): void {
    this.ustensileService.createUstensile(this.ustensileForm.value).subscribe((ustensile) => {
      this.ustensiles.push(ustensile); 
    });

    this.ustensileForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.ustensileForm.valid) {
      this.addUstensile();
    }
  }

  public get form(){
    return this.ustensileForm.controls
  }
}
