import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  registerUser(userDetail: User): Observable<User>
  {
    return this.http.post<User>(`${this.apiUrl}/users`, userDetail)
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`);
  }

}
