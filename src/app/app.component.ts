import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
=======
import { RouterModule, RouterOutlet } from '@angular/router';
>>>>>>> issouf
import { HeaderComponent } from "./header/header.component";

import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, HeaderComponent, AccueilComponent, RouterModule, FooterComponent],
=======
  imports: [ HeaderComponent,RouterOutlet,FooterComponent],
>>>>>>> issouf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'koba';
}
