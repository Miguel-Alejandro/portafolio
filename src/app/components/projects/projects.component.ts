import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public windowWidth: number;
  public carouselWidthCard: number = 900;

  constructor(){
  }

  public projects = [
    {
      name: 'MasterBowl',
      image: '/assets/img/masterbowl.png',
      url: 'https://masterbowl.app/home',
      technologies: [ 'Angular', 'Railway', 'Ionic' ],
      description: 'MasterBowl no es solo otra plataforma de Fantasy Football. Es una revolución que transforma a tus jugadores favoritos de la NFL en tarjetas coleccionables dinámicas, cuyo valor y poder crecen con cada jugada espectacular en el campo.'
    },
    {
      name: 'Password generator',
      image: '/assets/img/password-generator.png',
      url: 'https://password-generator-development.up.railway.app/home',
      technologies: [ 'Angular' ],
      description: 'Pagina para generar contraseñas'
    },
    {
      name: 'Dictionary web app',
      image: '/assets/img/dictionary-web-app.png',
      url: 'https://dictionary-web-app-55fbc.web.app/home',
      technologies: ['Angular', 'Firebase Hosting'],
      description: 'Aplicación diccionario, busca cualquier palabra en ingles, ve su significado y escucha su pronunciación. Todo esto gracias a una api.'
    },
    {
      name: 'Youtube widget ui - library',
      image: '/assets/img/youtube-widget-ui.png',
      url: 'https://www.npmjs.com/package/youtube-widget-ui',
      technologies: [ 'Stencil.js' ],
      description: 'Librería para mostrar, buscar videos y mostrar la información de un canal de youtube.'
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
