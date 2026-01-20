import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public downloadPDF(): void{
    const url = "assets/files/Miguel_Alejandro_Arellano_Lucio_-_Frontend_Developer-2026.pdf";
    window.open(url);
  }

}
