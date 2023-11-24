import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Etape from 'src/app/models/etape.model';

@Component({
  selector: 'app-add-etape',
  templateUrl: './add-etape.component.html',
  styleUrls: ['./add-etape.component.scss']
})
export class AddEtapeComponent {

  @Output()
  onEtape: EventEmitter<Etape> = new EventEmitter()



  constructor( private formBuilder: FormBuilder ){}

  submitted: boolean = false;

  etapeForm: FormGroup = this.formBuilder.group({
    description: ['', Validators.required]
  })

  private addEtape(): void
  {
    this.onEtape.emit(this.etapeForm.value)
    this.etapeForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.etapeForm.valid) {
      this.addEtape();
    }
  }

  public get form(){
    return this.etapeForm.controls
  }

}
