import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent {

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService
    ){}

    activationForm = this.formBuilder.group({
      code:['',[Validators.required]]
    })

    public addActivation(){
      this.submitActivation();
    }

    private submitActivation(){
      this.authService.activationUser(this.activationForm.value as string).subscribe()
    }

}
