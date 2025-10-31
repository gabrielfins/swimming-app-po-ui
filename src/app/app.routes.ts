import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layouts/home-layout/home-layout.component').then((c) => c.HomeLayoutComponent),
  }
];
