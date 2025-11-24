import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark' | 'ocean' | 'forest';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  accentColor: string;
}

const THEMES: Record<Theme, ThemeConfig> = {
  light: {
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#ffffff',
    textColor: '#212529',
    borderColor: '#dee2e6',
    accentColor: '#28a745'
  },
  dark: {
    primaryColor: '#4a9eff',
    secondaryColor: '#adb5bd',
    backgroundColor: '#1a1a2e',
    textColor: '#e0e0e0',
    borderColor: '#404052',
    accentColor: '#52d962'
  },
  ocean: {
    primaryColor: '#0097a7',
    secondaryColor: '#00acc1',
    backgroundColor: '#011627',
    textColor: '#d6deeb',
    borderColor: '#1e293b',
    accentColor: '#00d4ff'
  },
  forest: {
    primaryColor: '#2d6a4f',
    secondaryColor: '#40916c',
    backgroundColor: '#1b4332',
    textColor: '#d8f3dc',
    borderColor: '#2d6a4f',
    accentColor: '#52b788'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<Theme>('light');
  public theme$ = this.currentTheme.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  setTheme(theme: Theme): void {
    this.currentTheme.next(theme);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', theme);
      this.applyTheme(theme);
    }
  }

  toggleDarkMode(): void {
    const current = this.currentTheme.value;
    const newTheme = current === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getAvailableThemes(): Theme[] {
    return Object.keys(THEMES) as Theme[];
  }

  private applyTheme(theme: Theme): void {
    const config = THEMES[theme];
    const root = document.documentElement;

    root.style.setProperty('--primary-color', config.primaryColor);
    root.style.setProperty('--secondary-color', config.secondaryColor);
    root.style.setProperty('--bg-primary', config.backgroundColor);
    root.style.setProperty('--text-primary', config.textColor);
    root.style.setProperty('--border-color', config.borderColor);
    root.style.setProperty('--accent-color', config.accentColor);

    document.documentElement.setAttribute('data-theme', theme);
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const saved = (localStorage.getItem('theme') as Theme) || 'light';
      this.setTheme(saved);
    } else {
      // Définir un thème par défaut pour le SSR
      this.currentTheme.next('light');
    }
  }
}