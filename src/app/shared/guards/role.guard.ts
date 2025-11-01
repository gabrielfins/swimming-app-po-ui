import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

type ProtectedRoute = {
  route: string;
  permission: string;
};

export const roleGuard: CanActivateFn = (childRoute) => {
  return true;
  // const router = inject(Router);
  // const authService = inject(AuthService);

  // const user = authService.user$.value;

  // if (!user) {
  //   return false;
  // }

  // if (user.role.isAdmin && childRoute.url[0].path !== 'not-allowed') {
  //   return true;
  // }

  // const protectedRoutes: ProtectedRoute[] = [
  //   {
  //     route: 'services',
  //     permission: 'services'
  //   },
  //   {
  //     route: 'inspections',
  //     permission: 'inspections'
  //   },
  //   {
  //     route: 'roles',
  //     permission: 'roles'
  //   },
  //   {
  //     route: 'users',
  //     permission: 'users'
  //   },
  //   {
  //     route: 'permissions',
  //     permission: 'permissions'
  //   },
  //   {
  //     route: 'teams',
  //     permission: 'teams'
  //   },
  //   {
  //     route: 'apartments',
  //     permission: 'apartments'
  //   },
  //   {
  //     route: 'services/types',
  //     permission: 'serviceTypes'
  //   },
  //   {
  //     route: 'services/history',
  //     permission: 'servicesHistory'
  //   },
  //   {
  //     route: 'profile',
  //     permission: 'profile'
  //   }
  // ];

  // const currentRoute = childRoute.url.join('/');
  // const permission = protectedRoutes.find(({ route }) => currentRoute.startsWith(route))?.permission ?? '';

  // if (childRoute.url[0].path === 'not-allowed') {
  //   const allowed = protectedRoutes.map(({ permission }) => user.role.permissions[permission].view);

  //   // allow user to enter /not-allowed only if they don't have permission to access
  //   // any of the other routes protected by this file
  //   if (allowed.every((value) => !value)) {
  //     return true;
  //   } else {
  //     router.navigateByUrl(router.url)
  //     return false;
  //   }
  // }

  // if (!user.role.permissions[permission].view) {
  //   const redirect = protectedRoutes[protectedRoutes.findIndex(({ route }) => route === currentRoute) + 1];
  //   if (redirect) {
  //     router.navigateByUrl(redirect.route);
  //   } else {
  //     router.navigateByUrl('/not-allowed');
  //   }
  //   return false;
  // }

  // return true;
};
