import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleservicesComponent } from './singleservices/singleservices.component';
import { EscalierComponent } from './escalier/escalier.component';
import { PortesComponent } from './portes/portes.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'services/:type',
    component: ServicesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
