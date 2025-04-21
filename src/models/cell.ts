import { PlayerSymbol } from "./playerSymbol";

export type CellValue = PlayerSymbol | null;

export interface CellProps {
  index: number;
  isWin: boolean;
}

export interface CellPayload {
  index: number;
  symbol: CellValue;
}
