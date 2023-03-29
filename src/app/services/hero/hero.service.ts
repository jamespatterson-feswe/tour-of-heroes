/** angular, rxjs, setup */
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  public getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }
}
