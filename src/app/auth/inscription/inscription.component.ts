import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  
  registerForm = this.fb.group({
    nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required,Validators.email]],
    mdp: ['', [Validators.required]],
    confirmPassword: ['', Validators.required],
  },{
    validators: passwordMatchValidator
  }
  )

  message!: boolean


  add(){
    this.submitDetails()
    this.message = true
  }

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService,
    ){}

  get fullName(){
    return this.registerForm.controls['nom'];
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get mdp(){
    return this.registerForm.controls['mdp'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  private submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.authService.registerUser(postData as unknown as User).subscribe(
      response => {
        console.log(response);
      },
    )
  }



}
