import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  services = [
    {
      id: 'restaurants',
      title: 'Restaurants',
      description: 'Découvrez nos meilleurs restaurants partenaires',
      icon: '🍽️',
      link: '/services/restaurants'
    },
    {
      id: 'stores',
      title: 'Magasins',
      description: 'Explorez notre collection de magasins',
      icon: '🏪',
      link: '/services/stores'
    },
    {
      id: 'stairs',
      title: 'Escaliers',
      description: 'Services premium d\'escalier',
      icon: '📐',
      link: '/services/stairs'
    },
    {
      id: 'doors',
      title: 'Portes',
      description: 'Solutions de portes innovantes',
      icon: '🚪',
      link: '/services/doors'
    }
  ];
}
