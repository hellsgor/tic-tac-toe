import { CellValueSymbols } from "./cell";
import { GameCheck } from "./game";

export interface InfoProps extends GameCheck {
  classes?: string;
}

export interface InfoData {
  currentPlayer: CellValueSymbols;
  move: number;
}
