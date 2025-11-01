import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoButtonModule, PoButtonType, PoFieldModule, PoNotificationService } from '@po-ui/ng-components';
import { cpfValidator } from '../../../shared/validators/cpf.validator';
import { createResult } from '../../../shared/helpers/result.helper';
import { Atleta } from '../../../shared/models/atleta.model';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'swm-login',
  imports: [
    ReactiveFormsModule,
    PoFieldModule,
    PoButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  dataService = inject(DataService);
  poNotification = inject(PoNotificationService);

  login$ = createResult<Atleta | null>();

  form = this.fb.nonNullable.group(({
    cpf: ['', [Validators.required, cpfValidator()]],
    senha: ['', Validators.required]
  }));

  buttonType: PoButtonType = PoButtonType.Submit;

  login() {
    console.log('teste')
    const value = this.form.getRawValue();

    this.login$ = this.authService.login(value);

    this.login$.subscribe((result) => {
      if (result.status === 'success') {
        this.poNotification.success('Usuário logado com sucesso!');
        this.router.navigateByUrl('/');
      } else if (result.status === 'error') {
        this.poNotification.error(result.error.error.message);
      }
    });
  }
}
