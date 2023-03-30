import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-messages></app-messages>
    <h1>{{ title }}</h1>
    <nav *ngIf="allowLocation()" style="display: flex; flex-direction: row; gap: 20px;">
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">View Heroes</a>
    </nav>
    <!-- <app-heroes></app-heroes> -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  protected allowLocation(): boolean {
    return !window.location.pathname.includes('/heroes');
  }
}
