import { Component } from '@angular/core';
import { IconClass } from 'src/app/classes/icons/icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public isOpen: boolean = false;

  constructor(public icons: IconClass) {

  }

  public openSidemenu(): void {
    this.isOpen = !this.isOpen
  }

}
