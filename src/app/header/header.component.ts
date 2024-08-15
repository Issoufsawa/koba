import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======
import { RouterLink, RouterLinkActive } from '@angular/router';
>>>>>>> issouf

@Component({
  selector: 'app-header',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink],
=======
  imports: [RouterLink,
    RouterLinkActive
  ],
>>>>>>> issouf
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
