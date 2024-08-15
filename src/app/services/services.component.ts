import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../models/services';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink,RouterOutlet ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  constructor(private router: Router) { }

  onContinue() {
    this.router.navigateByUrl('singleservices');
}
onEscalier() {
  this.router.navigateByUrl('escalier');
}
onPortes() {
  this.router.navigateByUrl('portes');
}
onStore() {
  this.router.navigateByUrl('store');
}
  @Input() services!: Services;
  monServices!: Services;
  monServices1!: Services;
  monServices2!: Services;
  monServices3!: Services;




  ngOnInit() {
    this.monServices = new Services (
      'Container bureau',
 
   'contenaire4.jpeg',

  );
  this.monServices1 = new Services (
    'STORE ET BALCON METALLIQUE',

 'store.jpeg',

);
this.monServices2 = new Services (
  'RAMPES D\'ESCALIERS',

'escalier3.jpeg',

);
this.monServices3 = new Services (
  'Portail coulissant et motorisé',

'porte2.jpeg'

);
}
}
{

}
