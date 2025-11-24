import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService, type Theme } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  themes: Theme[] = [];
  currentTheme: Theme = 'light';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themes = this.themeService.getAvailableThemes();
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
