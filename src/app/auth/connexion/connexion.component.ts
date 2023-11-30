import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  loginform = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor( private fb: FormBuilder ){}

  get email(){
    return this.loginform.controls['email'];
  }

  get password(){
    return this.loginform.controls['password'];
  }

}
