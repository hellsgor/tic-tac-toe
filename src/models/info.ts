import { CellValueSymbols } from "./cell";
import { Win } from "./game";

export interface InfoProps {
  classes?: string;
}

export interface InfoData {
  currentPlayer: CellValueSymbols;
  move: number;
  win: Win;
  draw: boolean;
}
