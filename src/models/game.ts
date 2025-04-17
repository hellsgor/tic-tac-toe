import { CellValue } from "./cell";
import { PlayerSymbol } from "./playerSymbol";

export type WinCombination = number[];
export type Draw = boolean;
export type Win = boolean;
export type TechWin = Win;
export type Winner = PlayerSymbol | null;
export type CurrentPlayer = PlayerSymbol;
export type Move = number;

export interface GameState {
  cells: CellValue[];
  currentPlayer: CurrentPlayer;
  move: Move;
  draw: Draw;
  win: Win;
  winCombination: WinCombination;
  techWin: TechWin;
  winner: Winner;
  cellsCount: number;
}

export interface GameCheck {
  combination: WinCombination;
  win: Win;
  draw: Draw;
}
