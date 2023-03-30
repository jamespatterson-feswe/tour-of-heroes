/** angular, rxjs, setup */
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
/** helpers */
import { heroes } from '../../helpers/constants';
/** interfaces */
import { Hero } from '../../models/hero.interface';
/** services */

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private $heroes: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(heroes);

  constructor() {}

  public getHeroes(): Observable<Hero[]> {
    return this.$heroes.asObservable();
  }
}
