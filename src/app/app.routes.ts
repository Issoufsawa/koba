import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleservicesComponent } from './singleservices/singleservices.component';
import { RampesEscalierComponent } from './rampes-escalier/rampes-escalier.component';
import { PortailComponent } from './portail/portail.component';

export const routes: Routes = [
    {path:'services',component:ServicesComponent},
    {path: 'singleservices',component:SingleservicesComponent},
    {path: 'rampes-escalier',component:RampesEscalierComponent},
    {path: 'portail', component:PortailComponent},
    {path:'',component:AccueilComponent}
];
