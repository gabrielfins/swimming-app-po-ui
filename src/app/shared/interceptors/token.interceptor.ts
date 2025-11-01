import { type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const jwt = inject(JwtHelperService);
  const token = localStorage.getItem('access_token');

  if (req.url.includes('/auth/login') || req.url.includes('/auth/refresh')) {
    return next(req);
  }

  if (token && jwt.isTokenExpired(token)) {
    return authService.refreshToken().pipe(
      switchMap(() => {
        const newToken = localStorage.getItem('access_token');

        req = req.clone({
          setHeaders: {
            Authorization: `bearer ${newToken}`
          }
        });

        return next(req);
      })
    );
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`
      }
    });
  }

  return next(req);
};
