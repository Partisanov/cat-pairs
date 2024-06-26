export interface Card {
  value: number;
  flipped: boolean;
  x: number;
  y: number;
}

export enum Difficulty {
  EASY = 'easy',
  HARD = 'hard',
}

export enum GameStatus {
  PRE_GAME = 'pre-game',
  LOAD = 'load',
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost',
}

export interface LevelPairCounts {
  [key: number]: number;
}
