import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IconClass } from 'src/app/classes/icons/icons';
import { JobExperience } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public works: Array<JobExperience> = [
    {
      name: 'Digital Class',
      duration: '2020 - 2021',
      functions: [
        {
          functionName: 'Desarrollar aplicaciones web en python y django',
        },
        {
          functionName: 'Crear diseño para las aplicaciones web',
        },
      ],
    },
    {
      name: 'Jaak',
      duration: '2021 - 2023',
      functions: [
        {
          functionName: 'Desarrollar el frontend de los dashboards',
        },
        {
          functionName: 'Consumir apis que contenían inteligencia artificial',
        },
        {
          functionName: 'Crear pruebas E2E',
        },
      ],
    },
  ];

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [ 'prev' , 'next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(public iconClass:IconClass){}

}
