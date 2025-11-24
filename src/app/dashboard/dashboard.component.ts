import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface Comment {
  customer: { name: string; firstname: string };
  createdDate: Date;
  description: string;
  stars: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, DatePipe]
})
export class DashboardComponent implements OnInit {
  averageRating: number = 0;
  comments: Comment[] = [];
  stars: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadProfile();
    this.getAllComment('restaurant-id');
    this.getAverageRating('restaurant-id');
  }

  loadProfile(): void {
    // Load profile logic
  }

  getAllComment(restaurantId: string): void {
    // Fetch comments logic
    // this.comments = result.data.map((comment: any) => ({...}));
  }

  getAverageRating(restaurantId: string): void {
    // Fetch average rating logic
    // this.averageRating = result.data;
    // this.stars = this.generateStars(this.averageRating);
  }

  generateStars(rating: number): string[] {
    const starsArray: string[] = [];
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    for (let i = 0; i < fullStars; i++) {
      starsArray.push('#FFFFFF');
    }

    for (let i = 0; i < emptyStars; i++) {
      starsArray.push('#000000');
    }

    return starsArray;
  }
}
