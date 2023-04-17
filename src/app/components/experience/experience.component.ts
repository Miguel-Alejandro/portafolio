import { Component } from '@angular/core';
import { JobExperience } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public folderInfo: JobExperience;
  public works: Array<JobExperience> = [
    {
      name: 'Digital Class',
      duration: '2020 - 2021',
      functions: [
        {
          'functionName': 'Desarrollar aplicaciones web en python y django'
        },
        {
          'functionName': 'Crear diseño para las aplicaciones web'
        }
      ]

    },
    {
      name: 'Jaak',
      duration: '2021 - 2023',
      functions: [
        {
          'functionName': 'Desarrollar el frontend de los dashboards'
        },
        {
          'functionName': 'Consumir apis que contenían inteligencia artificial'
        },
        {
          'functionName': 'Crear pruebas E2E'
        }
      ]

    },
    
    
  ];

  public folderJobInfo($event: JobExperience): void {
    this.folderInfo = $event
  }

}
