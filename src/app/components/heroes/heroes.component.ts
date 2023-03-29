import { Component, OnChanges } from '@angular/core';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnChanges {

  public heroes: Hero[] = heroes;
  public selectedHero: Hero | null = null;

  ngOnChanges(): void {
    this.selectedHero && document.getElementById('hero-details-container')?.focus();
  }

  public onHeroSelection(hero: Hero): void {
    this.selectedHero = this.selectedHero?.id === hero?.id ? null : hero ?? null;
  }

}
