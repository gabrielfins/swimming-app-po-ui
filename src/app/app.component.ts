import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoThemeA11yEnum, PoThemeModule, PoThemeService, PoThemeTypeEnum } from '@po-ui/ng-components';
import { defaultTheme } from './shared/themes/default.theme';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PoThemeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  private readonly poThemeService = inject(PoThemeService);

  ngOnInit(): void {
    this.poThemeService.setTheme(defaultTheme, PoThemeTypeEnum.light, PoThemeA11yEnum.AA)
  }
}
