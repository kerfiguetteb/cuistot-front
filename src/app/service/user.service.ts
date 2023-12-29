import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }


  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.apiUrl}/users/${id}`)
  }

  updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }


}
