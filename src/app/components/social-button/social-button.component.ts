import { Component } from '@angular/core';
import { IconClass } from 'src/app/classes/icons/icons';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {

  constructor(public iconClass: IconClass) {}

}
