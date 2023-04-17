import { Component, Input } from '@angular/core';
import { JobExperience } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-folders-detail',
  templateUrl: './folders-detail.component.html',
  styleUrls: ['./folders-detail.component.scss']
})
export class FoldersDetailComponent {

  @Input() folderInfo: JobExperience;

}
