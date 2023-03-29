export interface Player {
  name: string;
  level: number;
  hp: number;
  mp: number;
  attributes: any[];
  moves: Moves[];
}

interface Moves {
  title: string;
  style: string;
  mpCost: number;
  hitPoints: number;
  special: boolean;
}
