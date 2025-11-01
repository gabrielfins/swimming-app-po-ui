import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, from, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { toResult } from '../operators/result.operator';
import { LoginDto } from '../models/login.model';
import { Atleta } from '../models/atleta.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  http = inject(HttpClient);

  user$ = new BehaviorSubject<Atleta | null>(null);

  apiUrl = environment.apiUrl;

  login(loginDto: LoginDto) {
    return this.http.post<{ access_token: string, refresh_token: string }>(`${this.apiUrl}/auth/login`, loginDto).pipe(
      switchMap((credentials) => {
        localStorage.setItem('access_token', credentials.access_token);
        localStorage.setItem('refresh_token', credentials.refresh_token);
        return this.loginFromToken();
      }),
      shareReplay(1),
      toResult()
    );
  }

  loginFromToken() {
    return this.http.get<Atleta>(`${this.apiUrl}/auth/me`).pipe(
      tap((user) => this.user$.next(user)),
      catchError(() => of(null)),
      shareReplay(1)
    );
  }

  refreshToken() {
    const token = localStorage.getItem('refresh_token');
    return this.http.post<{ access_token: string, refresh_token: string }>(`${this.apiUrl}/auth/refresh`, { refresh_token: token }).pipe(
      switchMap((credentials) => {
        localStorage.setItem('access_token', credentials.access_token);
        localStorage.setItem('refresh_token', credentials.refresh_token);
        return this.loginFromToken();
      }),
      shareReplay(1)
    )
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.user$.next(null);
    this.router.navigateByUrl('/login');
  }

  isUserLoggedIn() {
    return Boolean(this.user$.value);
  }
}
