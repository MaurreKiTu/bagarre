import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <header> 
    <h1>{{title}}</h1> 
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost text-xl" routerLink="/main">Accueil</a>
      <a class="btn btn-ghost text-xl" routerLink="/rules">Règles</a>
      <a class="btn btn-ghost text-xl" routerLink="/wheel">Roue</a>
      <a class="btn btn-ghost text-xl" routerLink="/resources">Ressources</a>
      <a class="btn btn-ghost text-xl" routerLink="/contact">Contact</a>
    </div>
    <!-- <a routerLink="/wheel">Wheel</a>
    <a routerLink="/rules">Rules</a>-->
  </header> 
  <main>
    <router-outlet/>
  </main>
  <footer>
    my footer
  </footer>
  `
})
export class AppComponent {
  title = 'La Bagarre';
  
}
