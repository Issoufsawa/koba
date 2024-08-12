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
  @Input() services!: Services;
  monServices!: Services;
  monServices1!: Services;
  monServices2!: Services;
  monServices3!: Services;




  ngOnInit() {
    this.monServices = new Services (
      'Container bureau',
    'Mon meilleur ami depuis toujours !',
   'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/366680172_258559897033725_7676534350561031933_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ab3j22UJnOkQ7kNvgH6Kwjt&_nc_ht=scontent.fabj3-2.fna&oh=00_AYDsmipoxsDOmXm7NhcpIDRtj-aVAk1-cWq0j0jyc1oGzA&oe=66BAD901',
   new Date()
  );
  this.monServices1 = new Services (
    'STORE BANNE DE TERRASSE',
  'Mon meilleur ami depuis toujours !',
 'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/316949846_131032423119807_3219545559173287574_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l4Kp_ER9u_YQ7kNvgGm0mX2&_nc_ht=scontent.fabj3-2.fna&oh=00_AYDCU8TBpxZ5x3dqqX84ENCzYRl4Q5gpHObnR35CaWoeRw&oe=66BB010E',
 new Date()
);
this.monServices2 = new Services (
  'RAMPES D\'ESCALIERS',
'Confection et pose tout fini',
'https://www.rampesetbalcons.com/wp-content/uploads/2021/02/escalier-interieur.jpg',
new Date()
);
this.monServices3 = new Services (
  'Portail coulissant et motorisé',
'Confection et pose tout fini',
'https://scontent.fabj3-2.fna.fbcdn.net/v/t39.30808-6/315892611_126807570208959_4034219954716521169_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8FJwkB9kHfgQ7kNvgG-HeWA&_nc_ht=scontent.fabj3-2.fna&oh=00_AYA8g-rQD3jpupeaCPuhhcTiMbDw4P0Djh_smncTk2HEBA&oe=66BB009C',
new Date()
);
}
}
{

}
