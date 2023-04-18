import { Component } from '@angular/core';
import { IconClass } from 'src/app/classes/icons/icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(public icons: IconClass){}

}
