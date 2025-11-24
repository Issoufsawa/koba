import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { MatCard } from '@angular/material/card';
import { TableComponent } from "../table/table.component";
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatCard, TableComponent, NavComponent,CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

   
  schedules: string[]  = ["7h30", "8h30","9h30","10h30","11h30","12h30","13h30"];
  dayOfWeek: string[]  = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
  

  getDayName(dayOfWeek: number): string {
    const days = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
     return days[dayOfWeek];
   }
  
  }
