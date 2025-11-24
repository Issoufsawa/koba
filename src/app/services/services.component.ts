import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DragComponent } from '../drag/drag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, DashboardComponent, DragComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
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
    ]),
    trigger('hoverScale', [
      transition(':enter', [style({ transform: 'scale(1)' })]),
      transition('hover <=> default', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  isHovered = -1;

  monServices = {
    title: 'Restaurants',
    imageUrl: 'assets/images/restaurant.jpg',
    description: 'Découvrez nos meilleurs restaurants'
  };

  monServices1 = {
    title: 'Magasins',
    imageUrl: 'assets/images/store.jpg',
    description: 'Explorez notre collection de magasins'
  };

  monServices2 = {
    title: 'Escaliers',
    imageUrl: 'assets/images/stairs.jpg',
    description: 'Services premium d\'escalier'
  };

  monServices3 = {
    title: 'Portes',
    imageUrl: 'assets/images/doors.jpg',
    description: 'Solutions de portes innovantes'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load services
  }

  onContinue(): void {
    this.router.navigateByUrl('singleservices');
  }

  onStore(): void {
    this.router.navigateByUrl('store');
  }

  onEscalier(): void {
    this.router.navigateByUrl('escalier');
  }

  onPortes(): void {
    this.router.navigateByUrl('portes');
  }
}
