import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  standalone:true,
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
  activeTheme = this.themeService.currentTheme;
  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
