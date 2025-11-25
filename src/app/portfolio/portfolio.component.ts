import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [CommonModule],
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
          style({ opacity: 0, transform: 'scale(0.9)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PortfolioComponent {
  selectedCategory = 'tous';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Structure Métallique - Immeuble Commercial',
      category: 'structures',
      description: 'Conception et fabrication d\'une structure métallique pour immeuble commercial',
      image: '🏢',
      year: 2023
    },
    {
      id: 2,
      title: 'Façade en Aluminium - Résidence',
      category: 'aluminium',
      description: 'Installation de façade en aluminium pour résidence haut de gamme',
      image: '🪟',
      year: 2023
    },
    {
      id: 3,
      title: 'Charpente Métallique - Hangar',
      category: 'structures',
      description: 'Fabrication et installation de charpente métallique pour hangar industriel',
      image: '🏭',
      year: 2023
    },
    {
      id: 4,
      title: 'Menuiserie Aluminium - Bureau',
      category: 'aluminium',
      description: 'Menuiserie en aluminium complète pour bâtiment administratif',
      image: '🪟',
      year: 2022
    },
    {
      id: 5,
      title: 'Escalier Métallique - Villas',
      category: 'structures',
      description: 'Escaliers métalliques design pour complexe résidentiel',
      image: '🪜',
      year: 2023
    },
    {
      id: 6,
      title: 'Cloisons Aluminium - Centre Commercial',
      category: 'aluminium',
      description: 'Système de cloisons amovibles en aluminium',
      image: '📦',
      year: 2023
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'tous') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  get categories(): string[] {
    return ['tous', 'structures', 'aluminium'];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }
}
