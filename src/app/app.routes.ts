import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleservicesComponent } from './singleservices/singleservices.component';

export const routes: Routes = [
    {path:'services',component:ServicesComponent},
    {path:'',component:AccueilComponent},
    {path: 'singleservices', component : SingleservicesComponent}
];
