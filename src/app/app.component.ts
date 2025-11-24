import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MatSlideToggleModule,
    NavbarComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'koba';
}


