import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public menuState: 'about' | 'experience' | 'skills' | 'contact' = 'about';
  
  constructor(){}
  
  public sidenavState($event): void {
    this.menuState = $event;
  }

  public changeHomeSection(optionType: 'about' | 'experience' | 'skills' | 'contact'): void {
    this.menuState = optionType;
  }
  
}
