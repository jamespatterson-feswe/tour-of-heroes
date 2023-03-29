import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Player } from '../../models/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public player: BehaviorSubject<Player> = new BehaviorSubject<Player>({
    name: 'To Be Decided',
    level: 1,
    hp: 100,
    mp: 0,
    attributes: [],
    moves: [
      {
        title: 'slash',
        style: 'physical',
        mpCost: 0,
        hitPoints: 25,
        special: false,
      },
      {
        title: 'Kick',
        style: 'physical',
        mpCost: 0,
        hitPoints: 25,
        special: false,
      },
    ],
  });

  constructor() {}

  public addMove(move: any): void {
    if (
      move &&
      !this.player.getValue().moves.filter((m: any) => m.title === move.title)
    ) {
      const moves = this.player.getValue().moves;
      moves.push(move);
      this.player.next({ ...this.player.getValue(), moves: moves });
    }
  }

  public increasePlayerLevel(): void {
    const level = this.player.getValue().level;
    this.player.next({ ...this.player.getValue(), level: level + 1 });
  }

  public getPlayer(): any {
    return this.player.asObservable();
  }

  public setPlayerName(name: string): void {
    if (name) {
      this.player.next({ ...this.player.getValue(), name: name });
    }
  }
}
