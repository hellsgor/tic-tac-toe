import { CellValueSymbols } from "./cell";

export interface InfoProps {
  win: boolean;
  draw: boolean;
}

export interface InfoData {
  currentPlayer: CellValueSymbols;
  move: number;
}
