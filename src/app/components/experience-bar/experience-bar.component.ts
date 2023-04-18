import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent {

  @Input() experienceRanges: number;

}
