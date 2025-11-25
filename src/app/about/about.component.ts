import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  team: TeamMember[] = [
    {
      name: 'Abou Koba',
      role: 'Fondateur & Directeur Général',
      specialty: 'Structures métalliques',
      icon: '👨‍💼'
    },
    {
      name: 'Moussa Diallo',
      role: 'Directeur Technique',
      specialty: 'Ouvrages en aluminium',
      icon: '👨‍🔧'
    },
    {
      name: 'Aïssatou Ba',
      role: 'Responsable Qualité',
      specialty: 'Normes et sécurité',
      icon: '👩‍💼'
    },
    {
      name: 'Amadou Sow',
      role: 'Chef de Projet',
      specialty: 'Gestion de projets',
      icon: '👨‍🏭'
    }
  ];

  values = [
    {
      title: 'Excellence',
      description: 'Qualité supérieure dans tous nos ouvrages',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Techniques modernes et solutions créatives',
      icon: '💡'
    },
    {
      title: 'Fiabilité',
      description: 'Délais respectés et projets livrés à temps',
      icon: '✅'
    },
    {
      title: 'Expertise',
      description: 'Équipe qualifiée et expérimentée',
      icon: '🏆'
    }
  ];
}
