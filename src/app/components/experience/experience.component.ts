import { Component } from '@angular/core';
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
      technologies: [ 'Python', 'Django', 'Django Rest' ]
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
      technologies: [ 'Angular', 'Ionic', 'Cypress', 'Firebase Auth' ]
    },
    {
      name: 'IDS',
      duration: '2023 - ACTUAL',
      functions: [
        {
          functionName: 'Implementación de nuevos modulos',
        },
        {
          functionName: 'Implementar nuevos features al sistema del cliente',
        },
        {
          functionName: 'Corrección de bugs',
        },
        {
          functionName: 'Desarrollo de API REST con Spring Boot',
        },
        {
          functionName: 'Apoyo en base de datos sql',
        },
        {
          functionName: 'Apoyo en crear procedimientos PL/SQL',
        },
      ],
      technologies: [ 'vue' ]
    },
  ];

  constructor(public iconClass:IconClass){}

}
