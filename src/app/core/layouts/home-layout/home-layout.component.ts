import { ChangeDetectionStrategy, Component, TemplateRef, viewChild } from '@angular/core';
import { PoHeaderModule, PoMenuItem, PoMenuModule } from '@po-ui/ng-components';

@Component({
  selector: 'swm-home-layout',
  imports: [
    PoHeaderModule,
    PoMenuModule
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent {
  private readonly clubsIcon = viewChild<TemplateRef<void>>('clubsIcon');
  private readonly clientsIcon = viewChild<TemplateRef<void>>('clientsIcon');
  private readonly usersIcon = viewChild<TemplateRef<void>>('usersIcon');
  private readonly classesIcon = viewChild<TemplateRef<void>>('classesIcon');
  private readonly testsIcon = viewChild<TemplateRef<void>>('testsIcon');
  private readonly competitionsIcon = viewChild<TemplateRef<void>>('competitionsIcon');
  private readonly logoutIcon = viewChild<TemplateRef<void>>('logoutIcon');

  menus: PoMenuItem[] = [
    {
      label: 'Clubes',
      link: '/clubs',
      icon: 'an an-person-simple-swim'
    },
    {
      label: 'Clientes',
      link: '/clients',
      icon: 'an an-briefcase'
    },
    {
      label: 'Usuários',
      link: '/users',
      icon: 'an an-user'
    },
    {
      label: 'Classes',
      link: '/classes',
      icon: 'an an-users-three'
    },
    {
      label: 'Provas',
      link: '/tests',
      icon: 'an an-clipboard-text'
    },
    {
      label: 'Competições',
      link: '/competitions',
      icon: 'an an-trophy'
    },
    {
      label: 'Sair',
      action: () => {},
      icon: 'an an-sign-out'
    },
  ]
}
