import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {} // Agrega el servicio Router como dependencia

  navigateToContacto() {
    this.router.navigate(['/contacto']);
  }

  navigateToInicio() {
    this.router.navigate(['/inicio']);
  }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
