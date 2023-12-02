import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  @Input()
  message!: boolean

  @Output()
  onMessage: EventEmitter<boolean> = new EventEmitter()
  

  add(){
    this.message = true
    this.onMessage.emit(this.message)    
  }

  constructor( private fb: FormBuilder, private router: Router ){}

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
