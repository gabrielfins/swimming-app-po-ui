import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      JwtModule.forRoot({})
    ),
    provideAppInitializer(async () => {
      const authService = inject(AuthService);
      const dataService = inject(DataService);

      const loading$ = authService.loginFromToken().pipe(
        switchMap((user) => {
          if (user) {
            return dataService.getAllData();
          } else {
            return of(user);
          }
        })
      );

      await firstValueFrom(loading$);
    }),
  ],
};
