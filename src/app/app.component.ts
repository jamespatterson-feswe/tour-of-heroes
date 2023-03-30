import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-messages></app-messages>
    <h1>{{ title }}</h1>
    <app-heroes></app-heroes>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
