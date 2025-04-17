import { PlayerSymbol } from "./playerSymbol";

export type CellValue = PlayerSymbol | null;

export interface CellProps {
  index: number;
  isWin: boolean;
  doMove: (index: number, symbol: PlayerSymbol) => void;
}

export interface CellPayload {
  index: number;
  symbol: CellValue;
}
