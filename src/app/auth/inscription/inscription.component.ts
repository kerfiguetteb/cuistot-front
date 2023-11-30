import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  
  registerForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', Validators.required],
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  },{
    validators: passwordMatchValidator
  }
  )

  constructor( private fb: FormBuilder ){}

  get fullName(){
    return this.registerForm.controls['fullName'];
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get password(){
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }


}
