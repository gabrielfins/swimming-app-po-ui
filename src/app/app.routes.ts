import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { roleGuard } from './shared/guards/role.guard';
import { loginGuard } from './shared/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    canActivateChild: [roleGuard],
    loadComponent: () => import('./core/layouts/home-layout/home-layout.component').then((c) => c.HomeLayoutComponent)
  },
  {
    path: 'login',
    canActivate: [loginGuard],
    loadComponent: () => import('./core/pages/login/login.component').then((c) => c.LoginComponent)
  }
];
