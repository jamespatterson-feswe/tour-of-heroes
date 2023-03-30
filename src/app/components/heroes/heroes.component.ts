import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class HeroesComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public heroes: Hero[];
  public selectedHero: Hero | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.subscription = this.heroService.getHeroes().subscribe({
      next: (heroes: Hero[]) => {
        this.heroes = heroes;
      },
      error: (error: unknown) => {
        console.error(error);
      },
      complete: () => console.log('completed')
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onHeroSelection(hero: Hero): void {
    this.selectedHero = this.selectedHero?.id === hero?.id ? null : hero ?? null;
  }

}
