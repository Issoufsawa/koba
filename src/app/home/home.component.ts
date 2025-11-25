import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

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
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  services = [
    {
      id: 'structures',
      title: 'Structures Métalliques',
      description: 'Conception et fabrication de structures métalliques pour tous types de projets',
      icon: '⚙️',
      link: '/services'
    },
    {
      id: 'aluminium',
      title: 'Ouvrages en Aluminium',
      description: 'Fabrication d\'ouvrages en aluminium de haute qualité et durabilité',
      icon: '🏗️',
      link: '/services'
    },
    {
      id: 'construction',
      title: 'Construction',
      description: 'Interventions sur divers projets de construction résidentiels et commerciaux',
      icon: '🏢',
      link: '/services'
    },
    {
      id: 'consultation',
      title: 'Consultation',
      description: 'Expertise et conseil technique pour vos projets de construction',
      icon: '💡',
      link: '/services'
    }
  ];

  stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '300+', label: 'Projets réalisés' },
    { number: '100%', label: 'Clients satisfaits' },
    { number: '30+', label: 'Équipe professionnelle' }
  ];
}
