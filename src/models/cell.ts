import { PlayerSymbol } from "./playerSymbol";

export interface CellProps {
  value: CellValue;
  index: number;
  win: boolean;
}

export type CellValueSymbols = PlayerSymbol;

export type CellValue = CellValueSymbols | null;

export interface CellPayload {
  index: number;
  symbol: CellValue;
}
