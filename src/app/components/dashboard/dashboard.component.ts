import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes: Hero[]) => {
        this.heroes = heroes.slice(0, 5);
      },
      error: (err: unknown) => {
        console.error(err);
      }
    });
  }

}
