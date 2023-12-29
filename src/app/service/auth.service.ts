import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  registerUser(userDetail: User): Observable<User>
  {
    return this.http.post<User>(`${this.apiUrl}/inscription`, userDetail)
  }

  connexion(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/connexion`, auth);
  }

  activationUser(activationNumber: string): Observable<string>
  {
    return this.http.post<string>(`${this.apiUrl}/activation`, activationNumber)
  }

}
