import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
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
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  public getUser() {
    this.loginUser()
  }

  private loginUser() {
    const { email, password } = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          sessionStorage.setItem('fullName', response[0].fullName)
          sessionStorage.setItem('id', response[0].id.toString())
          this.router.navigate(['profile'])
        } else {
          this.errorlogin = true
          this.message = "email ou mot de passe incorrect";
        }
      },
      error => {
        this.error = true
        this.message = "quelque chose c'est mal passer";
      }

    )
  }


}
