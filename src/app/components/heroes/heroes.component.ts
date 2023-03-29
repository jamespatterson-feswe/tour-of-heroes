import { Component, OnInit } from '@angular/core';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public selectedHero: Hero | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  public onHeroSelection(hero: Hero): void {
    this.selectedHero = this.selectedHero?.id === hero?.id ? null : hero ?? null;
  }

}
