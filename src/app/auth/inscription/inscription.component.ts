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
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', Validators.required],
  },{
    validators: passwordMatchValidator
  }
  )

  @Input()
  message!: boolean

  @Output()
  onMessage: EventEmitter<boolean> = new EventEmitter()
  

  add(){
    this.submitDetails()
    this.message = true
    this.onMessage.emit(this.message)    
  }

  constructor( 
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService,
    ){}

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
