import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  errorlogin!: boolean
  error!: boolean
  message!: string

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router


  ) { }

  get email() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  public getUser() {
    this.loginUser()
  }

  private loginUser() {
    this.authService.connexion(this.loginForm.value as Auth).subscribe((response) => {
      console.log(response);
      
    })
  }


}
