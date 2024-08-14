import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleservicesComponent } from './singleservices/singleservices.component';
import { PortesComponent } from './portes/portes.component';
import { StoreComponent } from './store/store.component';
import { EscalierComponent } from './escalier/escalier.component';

export const routes: Routes = [
    {path:'services',component:ServicesComponent},
    {path:'',component:AccueilComponent},
    {path: 'singleservices', component : SingleservicesComponent},
    {path: 'portes', component : PortesComponent},
    {path: 'store', component : StoreComponent},
    {path: 'escalier', component : EscalierComponent}
];
