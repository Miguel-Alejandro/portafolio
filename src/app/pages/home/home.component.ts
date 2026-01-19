import { Component, ElementRef, ViewChild } from '@angular/core';
import { Scroll } from '../../utils/scroll';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('homeInfo') homeInfo: ElementRef;
  @ViewChild('projects') projects: ElementRef;
  @ViewChild('experience') experience: ElementRef;
  
  constructor(){}
  
  public sidenavState($event): void {
    if($event === 'home') this.scrollAction(this.homeInfo.nativeElement);
    if($event === 'projects') this.scrollAction(this.projects.nativeElement);
  }


  public scrollAction(element:HTMLElement): void {
    Scroll.scrollToSection(element);
  }
  
}
