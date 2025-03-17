import { CellValueSymbols } from "./cell";
import { GameCheck } from "./game";

export interface InfoProps {
  classes?: string;
  gameCheck: GameCheck;
}

export interface InfoData {
  currentPlayer: CellValueSymbols;
  move: number;
}
