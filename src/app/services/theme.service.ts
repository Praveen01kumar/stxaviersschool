import { Injectable, PLATFORM_ID, inject, signal, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export type Theme = 'light' | 'dark' | 'system';
function getInitialTheme(): Theme {
  if (typeof window !== 'undefined' && window.localStorage) {
    return (localStorage.getItem('theme') as Theme | null) || 'dark';
  }
  return 'dark';
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  currentTheme = signal<Theme>(getInitialTheme());
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const theme = this.currentTheme();
        localStorage.setItem('theme', theme);
        this.updateDOM(theme);
      });
    }
  }

  setTheme(newTheme: Theme): void {
    this.currentTheme.set(newTheme);
  }

  updateDOM(theme: Theme): void {
    const root = document.documentElement;
    root.classList.remove('premium-light-theme', 'premium-dark-theme');
    if (theme === 'light') {
      root.classList.add('premium-light-theme');
    } else if (theme === 'dark') {
      root.classList.add('premium-dark-theme');
    }
  }
}
