import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    {path : '' , component :AccueilComponent},
    {path : 'services' , component : ServicesComponent}
];
