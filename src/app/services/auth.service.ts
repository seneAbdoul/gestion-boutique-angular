import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Credentials {
  mail: string;
  password: string;
}

export interface TokenInfo {
  id: number;
  mail: string;
  role: string;
  clientId?: number;
}

export interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:3001/api/v1/auth';
  
  constructor(private http: HttpClient) {}

  // Connexion normale
  login(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap(response => this.saveToken(response.token)),
        catchError(error => {
          console.error("Login failed:", error);
          return throwError(error);
        })
      );
  }
  
  // Connexion avec Google
  loginWithGoogle(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/google-login`, { token })
      .pipe(
        tap(response => this.saveToken(response.token)),
        catchError(error => {
          console.error("Google login failed:", error);
          return throwError(error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getTokenInfo(): TokenInfo | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return {
          id: decodedToken.id,
          mail: decodedToken.email,
          role: decodedToken.role,
          clientId: decodedToken.clientId
        };
      } catch (error) {
        console.error("Invalid token format:", error);
        return null;
      }
    }
    return null;
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getRole(): string | null {
    const tokenInfo = this.getTokenInfo();
    return tokenInfo ? tokenInfo.role : null;
  }
}
