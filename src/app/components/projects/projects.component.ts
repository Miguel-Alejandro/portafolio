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
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  getWindowSize() {
    this.windowWidth = window.innerWidth;

    if(this.windowWidth > 1200){
      this.carouselWidthCard = 900; 
    }
    if(this.windowWidth <= 1200){
      this.carouselWidthCard = 700;
    }
    if(this.windowWidth <= 992){
      this.carouselWidthCard = 600;
    }
    if(this.windowWidth <= 768){
      this.carouselWidthCard = 500;
    }
    if(this.windowWidth <= 576){
      this.carouselWidthCard = 320;
    }
  }

  public projects = [
    {
      name: 'Dictionary web app',
      image: '/assets/img/dictionary-web-app.png',
      url: 'https://dictionary-web-app-55fbc.web.app/home',
    },
    {
      name: 'Youtube widget ui - library',
      image: '/assets/img/youtube-widget-ui.png',
      url: 'https://www.npmjs.com/package/youtube-widget-ui',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth: true,
    autoHeight: true,
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
  }

}
