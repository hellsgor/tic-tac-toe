export type Win = number[][];
export type Draw = boolean;
export type TechWin = boolean;

export interface GameCheck {
  win: Win;
  draw: Draw;
}
