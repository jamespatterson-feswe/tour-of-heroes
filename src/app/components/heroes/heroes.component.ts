import { Component, OnInit } from '@angular/core';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';
/** services */
import { HeroService } from '../../services/hero/hero.service';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public selectedHero: Hero | null = null;

  constructor(private heroService: HeroService, private msgService: MessagesService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe({
      next: (heroes: Hero[]) => {
        this.heroes = heroes;
        this.msgService.addMessage('The heroes have been fetched successfully.')
      },
      error: (error: unknown) => {
        console.error(error);
      }
    })
  }

  public onHeroSelection(hero: Hero): void {
    this.selectedHero = this.selectedHero?.id === hero?.id ? null : hero ?? null;
  }

}
