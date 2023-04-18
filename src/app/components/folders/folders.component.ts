import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobExperience } from 'src/app/interfaces/job.interface';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent {

  @Input() data: Array<any>;
  @Output() folderDataSelected: EventEmitter<any> = new EventEmitter<any>();

  public emitData(data): void {
    this.folderDataSelected.emit(data);
  }

}
