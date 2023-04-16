import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconClass } from 'src/app/classes/icons/icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public isOpen: boolean = false;

  @Output() sidenavOptionsState: EventEmitter<string> = new EventEmitter<string>();

  constructor(public icons: IconClass) {

  }

  public changeSidenavStatus(optionType: string): void {
    this.sidenavOptionsState.emit(optionType);
    this.openSidemenu()
  }

  public openSidemenu(): void {
    this.isOpen = !this.isOpen
  }

}
