import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {

  private url: string = 'http://localhost:3000/auth';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  login(username, password): Promise<string> {
    return this.http
      .post(`${this.url}/token`, JSON.stringify({username, password}), { headers: this.headers })
      .toPromise()
      .then(res => res.json().jwt);
  }

  delToken() {
    localStorage.removeItem(TOKEN_NAME);
  }

}
