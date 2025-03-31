import { CellValueSymbols } from "./cell";
import { GameCheck } from "./game";

export interface InfoProps extends GameCheck {
  className?: string;
}

export interface InfoData {
  currentPlayer: CellValueSymbols;
  move: number;
}

export interface InfoMoveProps extends InfoData, GameCheck {
  timer: number;
}
