import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeManager } from '../../services/theme-manager.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, RouterOutlet, NavbarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'my-app';
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;
  theme = 'dark';

  changeTheme() {
    this.theme = this.theme === 'light'? 'dark': 'light';

    this.themeManager.changeTheme(this.theme);
  }
}
