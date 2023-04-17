import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobExperience } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent {

  @Input() data: Array<JobExperience>;
  @Output() folderDataSelected: EventEmitter<JobExperience> = new EventEmitter<JobExperience>();

  public emitData(data): void {
    this.folderDataSelected.emit(data);
  }

}
