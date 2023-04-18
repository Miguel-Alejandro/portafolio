import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public menuState: 'about' | 'experience' | 'skills' | 'projects' = 'about';
  
  constructor(){}
  
  public sidenavState($event): void {
    this.menuState = $event;
  }

  public changeHomeSection(optionType: 'about' | 'experience' | 'skills' | 'projects'): void {
    this.menuState = optionType;
  }
  
}
