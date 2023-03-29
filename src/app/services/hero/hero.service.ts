import { Injectable } from '@angular/core';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  public getHeroes(): Hero[] {
    return heroes;
  }
}
