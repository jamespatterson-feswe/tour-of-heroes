import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-messages></app-messages>
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/heroes">View Heroes</a>
    </nav>
    <!-- <app-heroes></app-heroes> -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
