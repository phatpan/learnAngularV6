import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  constructor(private http: HttpClient) { }

  authLogin(data: User): Observable<String> {
    return this.http.post<String>(`${environment.api_url}/auth/login`, data);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean{
    return !!this.token;
  }
}
