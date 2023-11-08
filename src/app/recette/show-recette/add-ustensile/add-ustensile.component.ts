import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Ustensile from 'src/app/models/ustensile.model';

@Component({
  selector: 'app-add-ustensile',
  templateUrl: './add-ustensile.component.html',
  styleUrls: ['./add-ustensile.component.scss']
})
export class AddUstensileComponent {

  constructor(private formBuilder: FormBuilder) {}

  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }

  submitted: boolean = false

  @Output()
  onUstensile: EventEmitter<Ustensile> = new EventEmitter()

  ustensileForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required]
  })

  private addUstensile(): void {
    this.onUstensile.emit(this.ustensileForm.value)

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
